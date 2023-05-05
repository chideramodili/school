const _ = require("lodash");
const formService = require("../service/form_service");
const Student = require("../models/student");

exports.get_a_specific_student = async (req, res) => {
  const student = await formService.get_a_specific_student(
    req.params.studentId
  );
  if (!student) {
    res.send("not a student");
  }
  res.send(student);
};
exports.get_all_student = async (req, res) => {
  const students = await formService.get_all_student();
  res.send(students);
};
exports.add_a_student = async (req, res) => {
  const student = new Student(
    _.pick(req.body, [
      "user1",
      "role1",
      "user2",
      "role2",
      "user3",
      "role3",
      "user4",
      "role4",
      "user5",
      "role5"
    ])
  );
  const students = await formService.add_a_student(student);
  res.json(students);
};
exports.edit_a_student = async (req, res) => {
  const updated = await formService.edit_a_student(
    req.params.studentId,
    req.body.user,
    req.body.role
  );
  res.send(updated);
};
exports.delete_a_student = async (req, res) => {
  const deletedItem = await formService.delete_a_student(req.params.studentId);
  res.send(deletedItem);
};
