import React, { useState, useCallback, useContext } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import MainNavigation from "../src/Shared/components/Navigation/MainNavigation";
import NewListing from "./components/ListingForm/NewListing";
import Form from "./components/SignUp/Form";
import LogIn from "./Pages/LogIn";
import HomePage from "./Pages/HomePage";
// import MainHeader from "./Shared/components/Navigation/MainHeader";
import Footer from "./components/Footer/Footer.js";
import DisplayCategoryPage from "./Pages/DisplayCategoryPage";
import AuthProvider from "./Shared/components/context/auth-provider";
import UserProfilePage from './Pages/UserProfilePage'

import UserProfile from "./components/UserProfile/UserProfile";
import "./App.css";
import ListingsPage from "./Pages/ListingsPage";
import UserListings from "./Pages/UserListings";
import EditListingsPage from "./Pages/EditListingsPage";


const App = () => {
  const auth = useContext(AuthProvider);
  // const [userId, setUserId] = useState(false);

  // const login = useCallback((uid) => {
  //   setIsLoggedIn(true);
  //   setUserId(uid);
  // }, []);

  // const logout = useCallback(() => {
  //   setIsLoggedIn(false);
  //   setUserId(null);
  // }, []);

  return (
    <AuthProvider>
    <Router>
      <MainNavigation />
      <Switch>
        <HomePage path="/" exact />
        <Route path="/signup" exact>
          <Form />
        </Route>
        <Route path="/logIn">
          <LogIn />
        </Route>
        <Route path="/listingsPage" exact>
          <ListingsPage />
        </Route>
        <Route path="/edit_listing/:id" exact>
          <EditListingsPage />
        </Route>
        <Route path="/add_listing/:id" exact>
          <NewListing />
        </Route>
        <Route path='/user_profile/:id'>
          <UserProfilePage />
        </Route>
        <Route path="/listings/user/:id" exact>
          <UserListings />
        </Route>
          <Route path="/:category">
            <DisplayCategoryPage />
          </Route>
        {/* <Route to='users_listings'>
          <UserListings />
        </Route> */}
      </Switch>
      <Footer />
    </Router>
     </AuthProvider>
  );
};
{/* </React.Fragment> */}
//   <React.Fragment>

export default App;
// {!auth.isLoggedIn &&
//   (<li>
//     <NavLink to="/signup" exact>
//       Login/Signup
//     </NavLink>
//   </li>)}
