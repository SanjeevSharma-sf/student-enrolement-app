import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../Service/api";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  table: {
    width: "100%",
    margin: "50px 0 0 50px",
    display: "flex",
    //justifyContent: "space-between",
    //alignItems: "space-between",
  },
  thead: {
    "& > *": {
      fontSize: 20,
      background: "#000000",
      color: "#FFFFFF",
    },
  },
  row: {
    "& > *": {
      fontSize: 18,
    },
  },
});

const AllStudents = () => {
  const [students, setStudents] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    getAllStudents();
  }, []);
  const deleteStudentData = async (id) => {
    await deleteStudent(id);
    getAllStudents();
  };
  const getAllStudents = async () => {
    const response = await getStudents();
    console.log("see this--->");
    console.log(response.data.students);
    setStudents(response.data.students);
  };

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.thead}>
          <TableCell>S.No</TableCell>
          <TableCell>Student Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone No</TableCell>
          <TableCell>Class</TableCell>
          <TableCell>Marks in %</TableCell>
          <TableCell>Options</TableCell>
        </TableRow>
        <TableBody>
          {students.map((student) => (
            <TableRow className={classes.row} key={student.id}>
              <TableCell>{student._id}</TableCell>
              <TableCell>{student.studentName}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.phone}</TableCell>
              <TableCell>{student.classIn}</TableCell>
              <TableCell>{student.marks}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginRight: 10 }}
                  component={Link}
                  to={`/edit/${student._id}`}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => deleteStudentData(student._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableHead>
    </Table>
  );
};

export default AllStudents;
