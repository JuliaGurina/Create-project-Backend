const express = require("express");
const router = express.Router();

const {
  getAllCosts,
  createNewCost,
  changeCostInfo,
  deleteCost,
} = require("../controllers/task.controller");

router.get("/allCosts", getAllCosts);
router.post("/createCost", createNewCost);
router.patch("/updateCost", changeCostInfo);
router.delete("/deleteCost", deleteCost);

module.exports = router;
