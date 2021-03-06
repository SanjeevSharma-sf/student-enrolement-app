import React from "react";
import { AppBar, Toolbar, makeStyles, FormHelperText } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
  header: {
    background: "#111111",
  },
  allAdds:{
    marginLeft: "400px"
  },
  tabs: {
    color: "#FFFFFF",
    marginRight: 20,
    textDecoration: "none",
    fontSize: 20,
  },
});
const NavBar = () => {
  const classes = useStyle();

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <NavLink className={classes.tabs} to="../" exact>
          Student Enrolement App
        </NavLink>
        <div className = {classes.allAdds}>
          <NavLink className={classes.tabs} to="all" exact>
            All Students
          </NavLink>
          <NavLink className={classes.tabs} to="add" exact>
            Add Student
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
