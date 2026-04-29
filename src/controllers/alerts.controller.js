export function createAlertsController(alertsService) {
  const getAlerts = async (req, res) => {
    void req;
    const alerts = await alertsService.getAlerts();
    res.status(200).json({
      status: "success",
      message: "Alerts fetched successfully",
      data: alerts,
    });
  };

  return {
    getAlerts,
  };
}
