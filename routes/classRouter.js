const express = require("express");
const router = express.Router();
const classController = require("../controller/classController");

router.get("/", classController.index);
router.get("/:class", classController.show);
router.get("/dosen/:username", classController.showbyteacher);
router.post("/", classController.store);
router.put("/", classController.update);
router.delete("/:id", classController.destroy);

module.exports = router;
