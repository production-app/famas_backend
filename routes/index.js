const express = require("express");
const router = express.Router();

const {
  getLocation,
  getDepartments,
  getLocationID,
  addLocations,
  addDepartment,
  deleteLocation,
  updateLocation,
} = require("../controller");

router.route("/location").get(getLocation);
router.route("/location/:id").get(getLocationID);
router.route("/department").get(getDepartments);
router.route("/location").post(addLocations);
router.route("/department").post(addDepartment);
router.route("/location/:id").delete(deleteLocation);
router.route("/location/:id").put(updateLocation);

module.exports = router;
