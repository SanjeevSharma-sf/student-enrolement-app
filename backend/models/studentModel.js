const mongoose = require("mongoose");
const validator = require("validator");
const autoincrement = require("mongoose-auto-increment");
const studentSchema = mongoose.Schema({
  studentName: {
    type: String,
    //required: true,
    required: [true, "Please Enter Student Name"],
  },
  fatherName: {
    type: String,
    //required: true,
    required: [true, "Please Enter Father Name"],
  },
  dob: {
    type: Date,
    required: [true, "Please Enter the date of Birth"],
    trim: true,
  },
  address: {
    type: String,
    required: [true, "Please Enter the address"],
  },
  city: {
    type: String,
    required: [true, "Please Enter the city"],
  },
  state: {
    type: String,
    required: [true, "Please Enter the State"],
  },
  pin: {
    type: Number,
    required: [true, "Please Enter the Pin"],
  },
  phone: {
    type: Number,
    required: [true, "Please Enter the Phone"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  classIn: {
    type: String,
    required: [true, "Please Enter the Class"],
  },
  marks: {
    type: Number,
    maxlength: [3, "Name cannot exceed 30 characters"],
    required: [true, "Please Enter the marks"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
autoincrement.initialize(mongoose.connection);
studentSchema.plugin(autoincrement.plugin, "Student");
module.exports = mongoose.model("Student", studentSchema);

// {
//     "studentName": "fsdf",
//     "fatherName": "fdsfsd",
//     "dob": "fd",
//     "address": "fsdsd",
//     "city": "dsfsd",
//     "state": "fsdf",
//     "pin": "122",
//     "phone": "vv",
//     "email": "san@gmail.com",
//     "classIn": "fsfd",
//     "marks": "fdsf",
//     "id": 2
//   }
