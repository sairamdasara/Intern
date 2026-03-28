const router = require("express").Router();
const Teacher = require("../models/Teacher");

router.post("/", async (req, res) => {
  const teacher = new Teacher(req.body);
  await teacher.save();
  res.send("Teacher Added");
});

router.get("/", async (req, res) => {
  res.json(await Teacher.find());
});

module.exports = router;
