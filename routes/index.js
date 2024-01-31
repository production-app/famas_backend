const express = require("express");
const router = express.Router();

const {
  getLocation,
  getDepartments,
  getLocationID,
  addLocations,
  addDepartment,
} = require("../controller");

router.route("/location").get(getLocation);
router.route("/location/:id").get(getLocationID);
router.route("/department").get(getDepartments);
router.route("/location").post(addLocations);
router.route("/department").post(addDepartment);

module.exports = router;
