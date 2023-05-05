const express = require("express");
const router = express.Router();
const formController = require("../controllers/form_controller");
const indexRoute = require("./index_route");
const JOI = require("joi");
// GET ALL STUDENTS
router.get("/", formController.get_all_student);

// GET A SPECIFIC STUDENT
router.get("/:studentId", formController.get_a_specific_student);
//ADD A STUDENT
router.post("/", formController.add_a_student);
//EDIT A STUDENT
router.patch("/:studentId", formController.edit_a_student);
//DELETE A STUDENT
router.delete("/:studentId", formController.delete_a_student);
module.exports = router;
