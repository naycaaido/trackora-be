export function createMaintenanceController(maintenanceService) {
  const createMaintenanceReport = async (req, res) => {
    const payload = req.validatedBody ?? req.body;
    const report = await maintenanceService.createMaintenanceReport(payload);
    res.status(201).json({
      status: "success",
      message: "Maintenance report created successfully",
      data: report,
    });
  };

  return {
    createMaintenanceReport,
  };
}
