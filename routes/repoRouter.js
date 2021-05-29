const express = require("express");
const router = express.Router();
const repoController = require("../controller/repoController");

router.get("/", repoController.index);
router.get("/:id", repoController.show);
router.post("/", repoController.store);
router.put("/:id", repoController.update);
router.delete("/:id", repoController.destroy);

module.exports = router;
