const router = require("express").Router();
const Class = require("../models/Class");

router.post("/", async (req, res) => {
  const cls = new Class(req.body);
  await cls.save();
  res.send("Class Created");
});

router.get("/", async (req, res) => {
  res.json(await Class.find());
});

module.exports = router;
