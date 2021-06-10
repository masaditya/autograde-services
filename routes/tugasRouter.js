const express = require("express");
const router = express.Router();
const tugasController = require("../controller/tugasController");

router.get("/", tugasController.index);
router.get("/:id", tugasController.show);
router.get("/dosen/:code", tugasController.getbydosen)
router.post("/", tugasController.store);
// router.put('/:id', tugasController.update)
// router.delete('/:id', tugasController.destroy)

module.exports = router;
