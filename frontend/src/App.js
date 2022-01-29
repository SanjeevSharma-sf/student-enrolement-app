import NavBar from "./Components/NavBar";
//import "./App.css";
import NotFound from "./Components/NotFound";
import StudentEnrolement from "./Components/StudentEnrolement";
import AllStudents from "./Components/AllStudents";
import AddStudent from "./Components/AddStudent";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";
import EditStudent from "./Components/EditStudent";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={StudentEnrolement} />
        <Route exact path="/all" component={AllStudents} />
        <Route exact path="/add" component={AddStudent} />
        <Route exact path="/edit/:id" component={EditStudent} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
