const express = require("express");
const router = express.Router();
const ptrl = require("../controller/productcontroller");

router.post("/",ptrl.insertproduct);
router.get("/",ptrl.viewproduct);
router.get("/:id",ptrl.singleviewproduct);
router.put("/:id",ptrl.updateproduct);
router.delete("/:id",ptrl.deleteproduct);

module.exports = router;