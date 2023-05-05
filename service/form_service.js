const form = require("../models/student");

exports.get_a_specific_student = async (studentId, groupId) => {
  return await form.findById({ _id: studentId });
};
exports.get_all_student = async () => {
  return await form.find();
};
exports.add_a_student = async form => {
  return await form.save();
};
exports.edit_a_student = async (studentId, name, role) => {
  return await form.findByIdAndUpdate(
    { _id: studentId },
    {
      $set: { user: user, role: role }
    }
  );
};
exports.delete_a_student = async studentId => {
  return await form.findByIdAndDelete({ _id: studentId, isDeleted: false });
};
