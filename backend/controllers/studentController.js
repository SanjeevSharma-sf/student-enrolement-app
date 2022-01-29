const Student = require("../models/studentModel");

exports.createStudent = async (req, res, next) => {
  //console.log(req.body);
  const student = await Student.create(req.body);

  res.status(201).json({
    success: true,
    student,
  });
};

exports.getAllStudents = async (req, res) => {
  //try {
  const students = await Student.find();
  //console.log(students);
  res.status(200).json({
    success: true,
    students,
  });
  // } catch (error) {
  //   res.json({ message: error.message });
  // }
};

exports.getStudentById = async (req, res) => {
  const id = req.params.id;
  try {
    const student = await Student.findById(id);
    res.status(200).json({
      success: true,
      student,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

exports.editSingleStudent = async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  console.log(student);
  res.status(200).json({
    
    student,
  });
  
};

exports.deleteSingleStudent = async (req, res) => {
  try {
    await Student.deleteOne({ _id: req.params.id });
    res.json({ message: "User Deleted successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
