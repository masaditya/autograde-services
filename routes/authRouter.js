const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

// router.get("/", tugasController.index);
// router.get("/:id", tugasController.show);
router.post("/", authController.store);
router.put('/:id', authController.update)
// router.delete('/:id', tugasController.destroy)

module.exports = router;
