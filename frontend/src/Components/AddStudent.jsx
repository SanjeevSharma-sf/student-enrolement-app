import react, { useState } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { addStudent } from "../Service/api";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 20,
    },
  },
});
const initialValue = {
  studentName: "",
  fatherName: "",
  dob: "",
  address: "",
  city: "",
  state: "",
  pin: "",
  phone: "",
  email: "",
  classIn: "",
  marks: "",
};
const AddStudent = () => {
  const [addstudent, setAddStudent] = useState(initialValue);
  const {
    studentName,
    fatherName,
    dob,
    address,
    city,
    state,
    pin,
    phone,
    email,
    classIn,
    marks,
  } = addstudent;
  const classes = useStyles();
  let history = useHistory();
  const onValueChange = (e) => {
    console.log(e.target.value);
    setAddStudent({ ...addstudent, [e.target.name]: e.target.value });
  };
  const addStudentDetails = async () => {
    await addStudent(addstudent);
    history.push("./all");
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Add Student</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">studentName</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="studentName"
          value={studentName}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Father's Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="fatherName"
          value={fatherName}
          id="my-input"
        />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="my-input">Date Of Birth</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="dob"
          type="date"
          value={dob}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">address</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="address"
          value={address}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">city</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="city"
          value={city}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">State</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="state"
          value={state}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Pin Code</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="pin"
          input="number"
          value={pin}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Phone</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={phone}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          type="email"
          value={email}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Class</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="classIn"
          value={classIn}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Marks</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="marks"
          value={marks}
          id="my-input"
        />
      </FormControl>

      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addStudentDetails()}
        >
          Add Student
        </Button>
      </FormControl>
    </FormGroup>
  );
};

export default AddStudent;
