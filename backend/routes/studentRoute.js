const express = require("express");
const { route } = require("../app");
const {
  getAllStudents,
  createStudent,
  getStudentById,
  editSingleStudent,
  deleteSingleStudent,
} = require("../controllers/studentController");
const router = express.Router();

//this is for checking
router.route("/").get(getAllStudents);

router.route("/add").post(createStudent);
router.route("/:id").get(getStudentById);
router.route("/:id").put(editSingleStudent);
router.route("/:id").delete(deleteSingleStudent);
module.exports = router;
