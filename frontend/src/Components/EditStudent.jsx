import { useState, useEffect } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { editStudent, getStudents } from "../Service/api";
import { useHistory, useParams } from "react-router-dom";

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
const EditStudent = () => {
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
  const { id } = useParams();
  let history = useHistory();
  // useEffect(()=>{
  //     loadStudentData();
  // });
  useEffect(() => {
    loadStudentDetails();
  }, []);

  const loadStudentDetails = async () => {
    const response = await getStudents(id);

    setAddStudent(response.data.student);
  };

  const editStudentDetails = async () => {
    const response = await editStudent(id, addstudent);
    console.log("i am in editStudentDetails");
    console.log(response);
    history.push("../all");
  };
  const onValueChange = (e) => {
    console.log(e.target.value);
    setAddStudent({ ...addstudent, [e.target.name]: e.target.value });
  };
  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Edit Student</Typography>
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
          value={dob}
          id="my-input"
          //type= "date"
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
          onClick={() => editStudentDetails()}
        >
          Edit Student
        </Button>
      </FormControl>
    </FormGroup>
  );
};

export default EditStudent;
