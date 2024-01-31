const Sequelize = require("sequelize");
const nanoid = require("nanoid");
const generate = require("nanoid/generate");

const Op = Sequelize.Op;

//Referencing the Tables and Views

const { locations, Departments, DeptListView } = require("../models");

//Controller
exports.getLocation = async (req, res, next) => {
  try {
    const getlocation = await locations.findAll({
      order: [["id", "DESC"]],
    });

    return res.status(201).json({
      status: true,
      data: getlocation,
      //url: urlArray
    });
  } catch (error) {
    console.log(error);

    return res.status(404).json({
      err: error,
      status: false,
    });
  }
};

exports.getDepartments = async (req, res, next) => {
  try {
    const getDepartment = await DeptListView.findAll({
      order: [["id", "DESC"]],
      //include: [locations],
    });

    return res.status(201).json({
      status: true,
      data: getDepartment,
      //url: urlArray
    });
  } catch (error) {
    //  throw  new Error("Wrong !")
    return res.status(400).json({
      status: false,
      error: error,
      //url: urlArray
    });
  }
};

exports.getLocationID = async (req, res, next) => {
  const id = req.params.id;

  try {
    const getLocationID = await locations.findOne({
      where: {
        id,
      },
    });

    return res.status(201).json({
      status: true,
      data: getLocationID,
      //url: urlArray
    });
  } catch (error) {}
};

exports.addLocations = async (req, res, next) => {
  const { value } = req.body;
  try {
    let valueUUID = generate("0123456789", 4);
    const createLocation = await locations.create({
      name: value,
      id: valueUUID,
      LocationID: valueUUID,
    });

    return res.status(201).json({
      status: true,
      data: createLocation,
      //url: urlArray
    });
  } catch (error) {
    console.log(error);
  }
};

exports.addDepartment = async (req, res, next) => {
  const { department, floor, locationpicked } = req.body;
  try {
    const createDepartmant = await Departments.create({
      name: department,
      Floor: floor,
      LocationID: locationpicked,
      LastCount: 0,
    });

    return res.status(201).json({
      status: true,
      data: createDepartmant,
      //url: urlArray
    });
  } catch (error) {
    console.log(error);
  }
};
