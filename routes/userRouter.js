const express = require("express");
const router = express.Router();
const authController = require("../controller/userController");

router.get("/", authController.index);
router.put("/", authController.setRole)
router.get("/:id", authController.show);
router.post("/", authController.store);
router.put("/", authController.update)
// router.delete('/:id', tugasController.destroy)

module.exports = router;
