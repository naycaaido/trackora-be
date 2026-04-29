// seed.js — Fleet Management Database Seeder
// Jalankan dengan: node seed.js
// Pastikan DATABASE_URL sudah di-set di environment atau file .env
import { prisma } from "./prisma.js";

// ==================== DATA ====================

const vehicles = [
  {
    id: "v001",
    vehicleCode: "TRK-001",
    name: "Hino 700 FS1EKJD",
    type: "Truk Berat",
    location: "Depot A - Cibitung",
    status: "critical",
    healthScore: 31,
    downtimeRisk: "high",
    lastMaintenanceDate: new Date("2026-02-25"),
    nextMaintenanceDate: new Date("2026-04-28"),
    mileage: 194300,
    operatingHours: 9540,
    issueCount: 9,
    recommendation:
      "Segera cek mesin dan sistem pendingin. Risiko mogok sangat tinggi.",
  },
  {
    id: "v002",
    vehicleCode: "TRK-002",
    name: "Mitsubishi Fuso Fighter FN",
    type: "Truk Sedang",
    location: "Depot C - Tambun",
    status: "warning",
    healthScore: 63,
    downtimeRisk: "medium",
    lastMaintenanceDate: new Date("2026-03-28"),
    nextMaintenanceDate: new Date("2026-05-12"),
    mileage: 141800,
    operatingHours: 6870,
    issueCount: 3,
    recommendation:
      "Jadwalkan penggantian kampas rem sebelum pertengahan bulan.",
  },
  {
    id: "v003",
    vehicleCode: "VAN-001",
    name: "Toyota HiAce Premio",
    type: "Van Penumpang",
    location: "Pool Kendaraan - Pusat",
    status: "healthy",
    healthScore: 87,
    downtimeRisk: "low",
    lastMaintenanceDate: new Date("2026-04-18"),
    nextMaintenanceDate: new Date("2026-06-22"),
    mileage: 47600,
    operatingHours: 2540,
    issueCount: 1,
    recommendation: "Kondisi prima. Lanjutkan jadwal perawatan berkala.",
  },
  {
    id: "v004",
    vehicleCode: "TRK-003",
    name: "UD Trucks Quester GWE280",
    type: "Truk Berat",
    location: "Depot A - Cibitung",
    status: "warning",
    healthScore: 54,
    downtimeRisk: "medium",
    lastMaintenanceDate: new Date("2026-03-18"),
    nextMaintenanceDate: new Date("2026-05-03"),
    mileage: 235400,
    operatingHours: 11200,
    issueCount: 7,
    recommendation:
      "Periksa kopling dan differential. Mileage tinggi, pertimbangkan overhaul besar.",
  },
  {
    id: "v005",
    vehicleCode: "PKP-001",
    name: "Suzuki Carry Pick Up FD",
    type: "Pick Up",
    location: "Depot D - Purwakarta",
    status: "healthy",
    healthScore: 84,
    downtimeRisk: "low",
    lastMaintenanceDate: new Date("2026-04-08"),
    nextMaintenanceDate: new Date("2026-06-05"),
    mileage: 38700,
    operatingHours: 1980,
    issueCount: 2,
    recommendation:
      "Kondisi baik. Pantau tekanan ban dan level oli secara rutin.",
  },
  {
    id: "v006",
    vehicleCode: "BUS-001",
    name: "Scania K360 IB",
    type: "Bus",
    location: "Pool Bus - Karawang",
    status: "critical",
    healthScore: 24,
    downtimeRisk: "high",
    lastMaintenanceDate: new Date("2026-02-12"),
    nextMaintenanceDate: new Date("2026-04-25"),
    mileage: 328500,
    operatingHours: 16400,
    issueCount: 12,
    recommendation:
      "DARURAT: Kendaraan wajib dihentikan dari operasi. Perbaikan menyeluruh segera.",
  },
  {
    id: "v007",
    vehicleCode: "VAN-002",
    name: "Isuzu Elf NLR 55 BL",
    type: "Mini Bus",
    location: "Pool Kendaraan - Pusat",
    status: "healthy",
    healthScore: 93,
    downtimeRisk: "low",
    lastMaintenanceDate: new Date("2026-04-22"),
    nextMaintenanceDate: new Date("2026-07-01"),
    mileage: 34200,
    operatingHours: 1720,
    issueCount: 0,
    recommendation:
      "Kondisi sangat baik. Tidak ada tindakan yang diperlukan saat ini.",
  },
  {
    id: "v008",
    vehicleCode: "TRK-004",
    name: "Hino 500 FG 190 JJ",
    type: "Truk Berat",
    location: "Depot B - Cikarang Barat",
    status: "warning",
    healthScore: 60,
    downtimeRisk: "medium",
    lastMaintenanceDate: new Date("2026-03-27"),
    nextMaintenanceDate: new Date("2026-05-08"),
    mileage: 182100,
    operatingHours: 9050,
    issueCount: 5,
    recommendation:
      "Ganti filter solar dan bersihkan nozzle injeksi. Performa mesin menurun.",
  },
];

const repeatedIssues = [
  { vehicleId: "v001", issue: "Overheating", frequency: 3 },
  { vehicleId: "v001", issue: "Oli Merembes", frequency: 2 },
  { vehicleId: "v002", issue: "Kampas Rem Tipis", frequency: 2 },
  { vehicleId: "v004", issue: "Getaran Tidak Normal", frequency: 4 },
  { vehicleId: "v004", issue: "Bunyi Kasar Transmisi", frequency: 2 },
  { vehicleId: "v006", issue: "Overheating", frequency: 4 },
  { vehicleId: "v006", issue: "Rem Tidak Responsif", frequency: 3 },
  { vehicleId: "v006", issue: "Oli Bocor", frequency: 2 },
  { vehicleId: "v008", issue: "Filter Bahan Bakar Kotor", frequency: 2 },
];

const maintenanceReports = [
  {
    id: "mr001",
    vehicleId: "v001",
    date: new Date("2026-02-25"),
    component: "Mesin",
    issue: "Overheating",
    severity: "high",
    technician: "Hendra Kusuma",
    note: "Suhu mesin melonjak saat operasi malam hari jarak 200 km",
    actionTaken:
      "Kuras coolant, ganti tutup radiator, bersihkan kipas radiator",
  },
  {
    id: "mr002",
    vehicleId: "v001",
    date: new Date("2026-01-20"),
    component: "Mesin",
    issue: "Oli Merembes",
    severity: "medium",
    technician: "Eko Prasetyo",
    note: "Rembesan oli ditemukan di area seal belakang mesin",
    actionTaken:
      "Ganti oil seal belakang, kencangkan drain plug, isi ulang oli",
  },
  {
    id: "mr003",
    vehicleId: "v001",
    date: new Date("2025-12-10"),
    component: "Ban",
    issue: "Keausan Tidak Merata",
    severity: "medium",
    technician: "Hendra Kusuma",
    note: "Tapak ban depan kiri aus di sisi dalam, indikasi spooring bermasalah",
    actionTaken: "Ganti ban depan, lakukan spooring dan balancing 4 roda",
  },
  {
    id: "mr004",
    vehicleId: "v001",
    date: new Date("2025-11-05"),
    component: "Rem",
    issue: "Kampas Aus",
    severity: "high",
    technician: "Wahyu Hidayat",
    note: "Kampas rem depan hampir habis, muncul suara gesekan logam",
    actionTaken: "Ganti kampas rem 4 roda, cek kondisi cakram",
  },
  {
    id: "mr005",
    vehicleId: "v002",
    date: new Date("2026-03-28"),
    component: "Rem",
    issue: "Kampas Rem Tipis",
    severity: "medium",
    technician: "Firman Nugroho",
    note: "Tebal kampas rem belakang sudah mendekati batas minimum",
    actionTaken: "Ukur ketebalan, ampelas permukaan, pasang indikator keausan",
  },
  {
    id: "mr006",
    vehicleId: "v002",
    date: new Date("2026-02-20"),
    component: "Ban",
    issue: "Tekanan Tidak Standar",
    severity: "low",
    technician: "Firman Nugroho",
    note: "Ban belakang kanan ditemukan kurang 15 psi dari standar",
    actionTaken: "Tambal bocor halus di tepi pelek, isi angin sesuai standar",
  },
  {
    id: "mr007",
    vehicleId: "v003",
    date: new Date("2026-04-18"),
    component: "Kelistrikan",
    issue: "Lampu Sein Redup",
    severity: "low",
    technician: "Bambang Setiyono",
    note: "Lampu sein kanan belakang berkedip tidak normal, tegangan rendah",
    actionTaken: "Ganti bohlam sein, periksa socket dan massa kabel",
  },
  {
    id: "mr008",
    vehicleId: "v004",
    date: new Date("2026-03-18"),
    component: "Mesin",
    issue: "Getaran Tidak Normal",
    severity: "high",
    technician: "Eko Prasetyo",
    note: "Getaran kasar terasa di kemudi saat RPM di atas 2000",
    actionTaken: "Periksa mounting mesin, balance ulang poros propeller",
  },
  {
    id: "mr009",
    vehicleId: "v004",
    date: new Date("2026-02-10"),
    component: "Transmisi",
    issue: "Bunyi Kasar",
    severity: "high",
    technician: "Hendra Kusuma",
    note: "Suara gemeretak dari gearbox saat perpindahan gigi 3 ke 4",
    actionTaken: "Ganti oli gardan dan transmisi, cek bearing input shaft",
  },
  {
    id: "mr010",
    vehicleId: "v006",
    date: new Date("2026-02-12"),
    component: "Rem",
    issue: "Rem Tidak Responsif",
    severity: "critical",
    technician: "Wahyu Hidayat",
    note: "KRITIS: Pedal rem amblas saat uji jalan, kendaraan sempat tidak bisa berhenti",
    actionTaken:
      "Ganti booster rem, bleed seluruh jalur, ganti master silinder",
  },
  {
    id: "mr011",
    vehicleId: "v006",
    date: new Date("2026-01-08"),
    component: "Mesin",
    issue: "Overheating Parah",
    severity: "critical",
    technician: "Eko Prasetyo",
    note: "Mesin mati mendadak di jalan tol, asap keluar dari kap mesin",
    actionTaken:
      "Overhaul water pump, ganti thermostat, kuras dan isi coolant baru",
  },
  {
    id: "mr012",
    vehicleId: "v008",
    date: new Date("2026-03-27"),
    component: "Sistem Bahan Bakar",
    issue: "Filter Kotor",
    severity: "medium",
    technician: "Firman Nugroho",
    note: "Konsumsi solar naik 20%, akselerasi terasa berat",
    actionTaken:
      "Ganti filter solar, bersihkan injector, cek tekanan pompa bahan bakar",
  },
];

const alerts = [
  {
    id: "al001",
    vehicleId: "v006",
    type: "critical_risk",
    riskLevel: "high",
    message: "Kendaraan tidak laik jalan — 3 isu kritis belum diselesaikan",
    predictedNextMaintenance: new Date("2026-04-25"),
    recommendation:
      "Hentikan operasi. Lakukan overhaul menyeluruh di bengkel resmi.",
    daysUntilMaintenance: 1,
    isActive: true,
  },
  {
    id: "al002",
    vehicleId: "v001",
    type: "maintenance_due",
    riskLevel: "high",
    message: "Jadwal servis jatuh tempo dalam 4 hari",
    predictedNextMaintenance: new Date("2026-04-28"),
    recommendation:
      "Lakukan ganti oli, cek radiator, dan servis mesin menyeluruh.",
    daysUntilMaintenance: 4,
    isActive: true,
  },
  {
    id: "al003",
    vehicleId: "v004",
    type: "repeated_issue",
    riskLevel: "medium",
    message: "Getaran tidak normal berulang 4x dalam 90 hari",
    predictedNextMaintenance: new Date("2026-05-03"),
    recommendation:
      "Inspeksi menyeluruh sistem drivetrain. Kemungkinan kerusakan struktural.",
    daysUntilMaintenance: 7,
    isActive: true,
  },
  {
    id: "al004",
    vehicleId: "v002",
    type: "maintenance_due",
    riskLevel: "medium",
    message: "Jadwal servis dalam 18 hari",
    predictedNextMaintenance: new Date("2026-05-12"),
    recommendation: "Siapkan stok kampas rem dan jadwalkan penggantian segera.",
    daysUntilMaintenance: 18,
    isActive: true,
  },
  {
    id: "al005",
    vehicleId: "v008",
    type: "maintenance_due",
    riskLevel: "medium",
    message: "Jadwal servis dalam 14 hari",
    predictedNextMaintenance: new Date("2026-05-08"),
    recommendation:
      "Ganti filter solar dan periksa sistem injeksi bahan bakar.",
    daysUntilMaintenance: 14,
    isActive: true,
  },
];

// Users — password_hash harus diganti dengan bcrypt hash yang nyata
// Contoh generate: import bcrypt from 'bcrypt'; bcrypt.hash('Password123!', 12)
const users = [
  {
    id: "usr001",
    email: "hendra.kusuma@fleet.id",
    passwordHash: "REPLACE_WITH_BCRYPT_HASH",
    role: "technician_operator",
    fullName: "Hendra Kusuma",
  },
  {
    id: "usr002",
    email: "eko.prasetyo@fleet.id",
    passwordHash: "REPLACE_WITH_BCRYPT_HASH",
    role: "technician_operator",
    fullName: "Eko Prasetyo",
  },
  {
    id: "usr003",
    email: "wahyu.hidayat@fleet.id",
    passwordHash: "REPLACE_WITH_BCRYPT_HASH",
    role: "technician_operator",
    fullName: "Wahyu Hidayat",
  },
  {
    id: "usr004",
    email: "firman.nugroho@fleet.id",
    passwordHash: "REPLACE_WITH_BCRYPT_HASH",
    role: "technician_operator",
    fullName: "Firman Nugroho",
  },
  {
    id: "usr005",
    email: "bambang.setiyono@fleet.id",
    passwordHash: "REPLACE_WITH_BCRYPT_HASH",
    role: "technician_operator",
    fullName: "Bambang Setiyono",
  },
  {
    id: "usr006",
    email: "supervisor@fleet.id",
    passwordHash: "REPLACE_WITH_BCRYPT_HASH",
    role: "supervisor_maintenance",
    fullName: "Agung Prabowo",
  },
  {
    id: "usr007",
    email: "admin@fleet.id",
    passwordHash: "REPLACE_WITH_BCRYPT_HASH",
    role: "administrator",
    fullName: "Rizky Dermawan",
  },
];

// ==================== SEEDER ====================

async function seed() {
  console.log("🌱 Memulai seeding...\n");

  // 1. Users
  console.log("👤 Seeding users...");
  for (const user of users) {
    await prisma.user.upsert({
      where: { id: user.id },
      update: {},
      create: { ...user, isActive: true },
    });
  }
  console.log(`   ✓ ${users.length} users`);

  // 2. Vehicles
  console.log("🚛 Seeding vehicles...");
  for (const vehicle of vehicles) {
    await prisma.vehicle.upsert({
      where: { id: vehicle.id },
      update: {},
      create: vehicle,
    });
  }
  console.log(`   ✓ ${vehicles.length} vehicles`);

  // 3. Vehicle repeated issues
  console.log("🔁 Seeding vehicle_repeated_issues...");
  for (const ri of repeatedIssues) {
    await prisma.vehicleRepeatedIssue.upsert({
      where: { vehicleId_issue: { vehicleId: ri.vehicleId, issue: ri.issue } },
      update: { frequency: ri.frequency },
      create: ri,
    });
  }
  console.log(`   ✓ ${repeatedIssues.length} repeated issues`);

  // 4. Maintenance reports
  console.log("🔧 Seeding maintenance_reports...");
  for (const report of maintenanceReports) {
    await prisma.maintenanceReport.upsert({
      where: { id: report.id },
      update: {},
      create: report,
    });
  }
  console.log(`   ✓ ${maintenanceReports.length} maintenance reports`);

  // 5. Alerts
  console.log("🚨 Seeding alerts...");
  for (const alert of alerts) {
    await prisma.alert.upsert({
      where: { id: alert.id },
      update: {},
      create: alert,
    });
  }
  console.log(`   ✓ ${alerts.length} alerts`);

  console.log("\n✅ Seeding selesai!");
}

seed()
  .catch((err) => {
    console.error("❌ Seeding gagal:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
