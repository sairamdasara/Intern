const router = require("express").Router();
const Student = require("../models/Student");
const auth = require("../middleware/auth");
const role = require("../middleware/role");

router.post("/", auth, role(["admin"]), async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.send("Student Added");
});

router.get("/", auth, async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

module.exports = router;
