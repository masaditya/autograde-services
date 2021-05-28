const express = require("express");
const router = express.Router();
const classController = require("../controller/classController");

router.get("/", classController.index);
router.get("/:id", classController.show);
router.post("/", classController.store);
router.put("/:id", classController.update);
router.delete("/:id", classController.destroy);

module.exports = router;
