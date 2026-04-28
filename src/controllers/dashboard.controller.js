export function createDashboardController(dashboardService) {
  const getSummary = async (req, res) => {
    void req;
    const data = await dashboardService.getSummary();
    res.status(200).json({
      status: "success",
      message: "Dashboard summary fetched successfully",
      data,
    });
  };

  const getCharts = async (req, res) => {
    void req;
    const data = await dashboardService.getCharts();
    res.status(200).json({
      status: "success",
      message: "Dashboard charts fetched successfully",
      data,
    });
  };

  return {
    getSummary,
    getCharts,
  };
}
