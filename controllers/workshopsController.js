//Import the model of the schema
const workshopsModel = require("../models/workshopsModel");

exports.getCurrentWorkshops = async (req, res) => {
  // Finding all of workshops
  workshopsModel
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getPastWorkshops = async (req, res) => {
  let current = new Date();
  let inputDate = new Date(current.toISOString());
  // Finding all of workshops
  workshopsModel
    .find({
      date: { $lte: inputDate },
    })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getUpcomingWorkshops = async (req, res) => {
  let current = new Date();
  let inputDate = new Date(current.toISOString());
  // Finding all of workshops
  workshopsModel
    .find({
      date: { $gte: inputDate },
    })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};


