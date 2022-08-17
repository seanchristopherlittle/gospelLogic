const checkInController = require("../controllers/checkIn.controller");

module.exports = (app) => {
  app.get("/api/checkIns", checkInController.getCheckIns);
  app.get("/api/checkIns/:id", checkInController.getCheckInById);
  app.get(
    "/api/checkIns-by-user/:userName",
    checkInController.getCheckInsByUser
  );
  app.post("/api/checkIns", checkInController.createCheckIn);
  app.put("/api/checkIns/:id", checkInController.updateCheckIn);
  app.delete("/api/checkIns/:id", checkInController.deleteCheckIn);
};
