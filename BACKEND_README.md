# Trackora Backend Documentation

Dokumen ini merangkum rancangan backend berdasarkan data dan flow yang **sudah dipakai frontend** saat ini (operational scope): **dashboard, vehicles, maintenance reports, alerts**.

## 1. Scope Backend (Phase 1)

Fokus implementasi:

1. Dashboard summary & charts
2. Vehicles list + filter + detail
3. Maintenance report creation
4. Alerts list

Di luar scope fase ini: auth production-grade, settings persistence, RBAC detail.

## 2. Stack yang Direkomendasikan

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **Pattern**: Route -> Controller -> Service -> Repository

## 3. Frontend Contract yang Harus Dipenuhi

Frontend saat ini memakai fungsi service:

- `getDashboardSummary()`
- `getDashboardCharts()`
- `getVehicles(filters)`
- `getVehicleById(id)`
- `createMaintenanceReport(payload)`
- `getAlerts()`

Saat backend aktif, fungsi di atas perlu diarahkan ke endpoint API (shape response dipertahankan supaya UI tidak perlu dirombak besar).

## 4. Data Model yang Dipakai Frontend

### 4.1 Vehicle

Field yang dipakai di UI:

- `id`
- `vehicleCode`
- `name`
- `type`
- `location`
- `status` (`healthy | warning | critical`)
- `healthScore` (0-100)
- `downtimeRisk` (`low | medium | high`)
- `lastMaintenanceDate`
- `nextMaintenanceDate`
- `mileage`
- `operatingHours`
- `issueCount`
- `repeatedIssues[]`
- `recommendation`

### 4.2 Maintenance Report / History

Field yang dipakai:

- `id`
- `vehicleId`
- `date`
- `component`
- `issue`
- `severity` (`low | medium | high | critical`)
- `technician`
- `note`
- `actionTaken`

Payload create report dari frontend:

```json
{
  "vehicleId": "v001",
  "component": "Mesin",
  "issue": "Overheating",
  "severity": "high",
  "notes": "Suhu naik cepat saat beban tinggi"
}
```

### 4.3 Alert

Field yang dipakai:

- `id`
- `vehicleId`
- `vehicleCode`
- `vehicleName`
- `type` (`critical_risk | maintenance_due | repeated_issue`)
- `riskLevel` (`low | medium | high`)
- `message`
- `predictedNextMaintenance`
- `recommendation`
- `daysUntilMaintenance`

### 4.4 Dashboard Output

Summary:

- `totalVehicles`
- `healthy`
- `warning`
- `critical`
- `dueSoon`
- `highRisk`

Charts:

- `issueTrend[]` -> `{ month, issues, maintenance }`
- `componentDistribution[]` -> `{ component, count }`
- `healthOverview[]` -> `{ name, value, color }`

## 5. Rancangan Database (PostgreSQL)

## 5.1 Enum

```sql
CREATE TYPE vehicle_status AS ENUM ('healthy', 'warning', 'critical');
CREATE TYPE risk_level AS ENUM ('low', 'medium', 'high');
CREATE TYPE severity_level AS ENUM ('low', 'medium', 'high', 'critical');
CREATE TYPE alert_type AS ENUM ('critical_risk', 'maintenance_due', 'repeated_issue');
```

## 5.2 Tables

```sql
CREATE TABLE vehicles (
  id TEXT PRIMARY KEY,
  vehicle_code TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  location TEXT NOT NULL,
  status vehicle_status NOT NULL DEFAULT 'healthy',
  health_score INT NOT NULL CHECK (health_score BETWEEN 0 AND 100),
  downtime_risk risk_level NOT NULL DEFAULT 'low',
  last_maintenance_date DATE,
  next_maintenance_date DATE,
  mileage INT NOT NULL DEFAULT 0,
  operating_hours INT NOT NULL DEFAULT 0,
  issue_count INT NOT NULL DEFAULT 0,
  recommendation TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE maintenance_reports (
  id TEXT PRIMARY KEY,
  vehicle_id TEXT NOT NULL REFERENCES vehicles(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  component TEXT NOT NULL,
  issue TEXT NOT NULL,
  severity severity_level NOT NULL,
  technician TEXT NOT NULL,
  note TEXT,
  action_taken TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE alerts (
  id TEXT PRIMARY KEY,
  vehicle_id TEXT NOT NULL REFERENCES vehicles(id) ON DELETE CASCADE,
  type alert_type NOT NULL,
  risk_level risk_level NOT NULL,
  message TEXT NOT NULL,
  predicted_next_maintenance DATE,
  recommendation TEXT,
  days_until_maintenance INT,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

Opsional normalisasi isu berulang:

```sql
CREATE TABLE vehicle_repeated_issues (
  vehicle_id TEXT NOT NULL REFERENCES vehicles(id) ON DELETE CASCADE,
  issue TEXT NOT NULL,
  frequency INT NOT NULL DEFAULT 1,
  PRIMARY KEY (vehicle_id, issue)
);
```

## 5.3 Index penting

```sql
CREATE INDEX idx_vehicles_status ON vehicles(status);
CREATE INDEX idx_vehicles_type ON vehicles(type);
CREATE INDEX idx_vehicles_downtime_risk ON vehicles(downtime_risk);
CREATE INDEX idx_reports_vehicle_date ON maintenance_reports(vehicle_id, date DESC);
CREATE INDEX idx_alerts_active_risk ON alerts(is_active, risk_level);
```

## 6. API Specification (Phase 1)

Base URL: `/api`

### 6.1 Dashboard

**GET** `/dashboard/summary`

Response:

```json
{
  "totalVehicles": 8,
  "healthy": 3,
  "warning": 3,
  "critical": 2,
  "dueSoon": 3,
  "highRisk": 2
}
```

**GET** `/dashboard/charts`

Response:

```json
{
  "issueTrend": [{ "month": "Apr", "issues": 7, "maintenance": 5 }],
  "componentDistribution": [{ "component": "Mesin", "count": 8 }],
  "healthOverview": [{ "name": "Sehat (80-100)", "value": 3, "color": "#10b981" }]
}
```

### 6.2 Vehicles

**GET** `/vehicles?search=&status=&type=&risk=`

Filters:

- `status`: `healthy | warning | critical | all`
- `type`: string tipe kendaraan
- `risk`: `low | medium | high | all`
- `search`: vehicle code / nama / lokasi

Response: array `Vehicle`.

**GET** `/vehicles/:id`

Response:

```json
{
  "id": "v001",
  "vehicleCode": "TRK-001",
  "name": "Isuzu Giga FVZ",
  "maintenanceHistory": [
    {
      "id": "mh001",
      "vehicleId": "v001",
      "date": "2026-03-10",
      "component": "Mesin",
      "issue": "Overheating",
      "severity": "high",
      "technician": "Budi Santoso",
      "note": "Suhu mesin melebihi batas",
      "actionTaken": "Flush coolant"
    }
  ]
}
```

### 6.3 Maintenance Reports

**POST** `/maintenance-reports`

Request body:

```json
{
  "vehicleId": "v001",
  "component": "Mesin",
  "issue": "Overheating",
  "severity": "high",
  "notes": "Suhu tinggi saat tanjakan"
}
```

Response:

```json
{
  "id": "mh1735731231231",
  "vehicleId": "v001",
  "component": "Mesin",
  "issue": "Overheating",
  "severity": "high",
  "date": "2026-04-26",
  "technician": "Teknisi Demo",
  "note": "Suhu tinggi saat tanjakan"
}
```

Side effects minimum yang harus terjadi:

1. Insert maintenance report
2. Update vehicle:
   - `issueCount += 1`
   - `lastMaintenanceDate = date report`
   - kurangi `healthScore` sesuai severity penalty
   - kalkulasi ulang `status`
3. Recalculate alerts/repeated issue (sesuai strategi service backend)

### 6.4 Alerts

**GET** `/alerts`

Response: array `Alert`.

## 7. Business Rules Awal (Parity dengan Frontend)

Penalty health score dari severity:

- `low = 2`
- `medium = 5`
- `high = 10`
- `critical = 20`

Status dari health score:

- `>= 80 => healthy`
- `>= 60 && < 80 => warning`
- `< 60 => critical`

## 8. Mapping Frontend <-> Backend Endpoint

| Frontend Service Function | Backend Endpoint |
| --- | --- |
| `getDashboardSummary()` | `GET /api/dashboard/summary` |
| `getDashboardCharts()` | `GET /api/dashboard/charts` |
| `getVehicles(filters)` | `GET /api/vehicles` |
| `getVehicleById(id)` | `GET /api/vehicles/:id` |
| `createMaintenanceReport(payload)` | `POST /api/maintenance-reports` |
| `getAlerts()` | `GET /api/alerts` |

## 9. Environment Variables

Backend (`.env`):

```env
PORT=8000
DATABASE_URL=postgres://postgres:postgres@localhost:5432/trackora
CORS_ORIGIN=http://localhost:5173
```

Frontend (`.env`):

```env
VITE_API_URL=http://localhost:8000/api
```

## 10. Struktur Folder Backend (Rekomendasi)

```text
backend/
  src/
    app.js
    server.js
    config/
      env.js
      db.js
    routes/
      dashboard.routes.js
      vehicles.routes.js
      maintenance.routes.js
      alerts.routes.js
    controllers/
      dashboard.controller.js
      vehicles.controller.js
      maintenance.controller.js
      alerts.controller.js
    services/
      dashboard.service.js
      vehicles.service.js
      maintenance.service.js
      alerts.service.js
    repositories/
      dashboard.repository.js
      vehicles.repository.js
      maintenance.repository.js
      alerts.repository.js
    middlewares/
      error-handler.js
      validate-request.js
    validators/
      maintenance.validator.js
  migrations/
  seeds/
```

## 11. Integration Checklist

1. Buat backend skeleton + koneksi PostgreSQL
2. Implement migration schema di atas
3. Implement endpoint phase 1
4. Seed data awal dari mock frontend (opsional untuk dev)
5. Ubah `src/services/vehicleService.js` agar pakai `apiFetch`
6. Uji flow: dashboard -> vehicles -> detail -> submit report -> alerts

---

Dokumen ini ditulis agar implementasi backend mengikuti kontrak frontend yang sudah ada, sehingga migrasi dari mock data ke API bisa dilakukan bertahap dan minim perubahan UI.