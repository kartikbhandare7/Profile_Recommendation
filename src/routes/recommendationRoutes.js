const express = require("express");

const router = express.Router();

const recommendationController = require("../controllers/recommendationController");


router.post("/", recommendationController.recommend);
router.get("/explain/:id", recommendationController.explainItem);

module.exports = router;