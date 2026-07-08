const express = require("express");
const authenticate=require("../middleware/authMiddleware");
const router = express.Router();

const controller = require("../controllers/itemController");

router.get("/",authenticate,controller.getAllItems);

router.get("/:id",authenticate,controller.getItemById);

router.post("/",authenticate,controller.createItem);

router.put("/:id",authenticate,controller.updateItem);

router.delete("/:id",authenticate,controller.deleteItem);

module.exports = router;