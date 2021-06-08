const Cost = require("../../db/models/task/index");

module.exports.getAllCosts = (req, res) => {
  Cost.find().then((result) => {
    res.send({ data: result });
  });
};

module.exports.createNewCost = (req, res) => {
  const cost = new Cost(req.body);
  cost.save().then((result) => {
    res.send({ data: result });
  });
};

module.exports.changeCostInfo = (req, res) => {
  const { _id } = req.body;
  Cost.updateOne({ _id }, req.body).then((result) => {
    Cost.find().then((result) => {
      res.send({ data: result });
    });
  });
};

module.exports.deleteCost = (req, res) => {
  Cost.deleteOne(req.query).then((result) => {
    Cost.find().then((result) => {
      res.send({ data: result });
    });
  });
};
