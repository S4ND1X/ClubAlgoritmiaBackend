//Import the model of the schema
const workshopsModel = require("../models/workshopsModel");

//Get all workshops on DB with equal model
exports.getCurrentWorkshops = async (req, res) => {
  workshopsModel
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Get past workshops from current date
exports.getPastWorkshops = async (req, res) => {
  //Get current date, then conver it to ISO and based on that create new date
  let current = new Date();
  let inputDate = new Date(current.toISOString());
  
  //Using $lte means Less Than or Equal, more info on mongoDoc
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

//Get upcoming workshops from current date
exports.getUpcomingWorkshops = async (req, res) => {
  //Same method as above
  let current = new Date();
  let inputDate = new Date(current.toISOString());
  
  //Using $gte means Greater Than or Equal, more info on mongoDoc
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


