import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/HomePage/Home/Home";
import { createContext, useState } from "react";
import Login from "./components/Login/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AddService from "./components/Dashboard/AddService/AddService";
import AddTeamMember from "./components/Dashboard/AddTeamMember/AddTeamMember";
import Review from "./components/Dashboard/Review/Review";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import Settings from "./components/Dashboard/Settings/Settings";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Services from "./components/Dashboard/Services/Services";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>
          <PrivateRoute path="/settings">
            <Settings />
          </PrivateRoute>
          <PrivateRoute path="/placeOrder/:id">
            <PlaceOrder />
          </PrivateRoute>
          <PrivateRoute path="/services">
            <Services />
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/addTeamMember">
            <AddTeamMember />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
