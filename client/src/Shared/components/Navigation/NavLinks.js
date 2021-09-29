import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/auth-context";


import "./NavLinks.css";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  console.log("auth", auth);
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/listingsPage" exact>
          All Listings
        </NavLink>
      </li>
      {!auth.isLoggedIn &&
      (<li>
        <NavLink to="/login" exact>
          Log In
        </NavLink>
      </li>)}

     {auth.isLoggedIn &&
     ( <li>
        <NavLink to={`/user_profile/${auth.userId}`} exact>
          MyProfile
        </NavLink>
      </li>)}
     {!auth.isLoggedIn &&
     ( <li>
        <NavLink to="/signup" exact>
          Signup
        </NavLink>
      </li>)}
     {auth.isLoggedIn &&
     ( <li>
        <NavLink to={`/add_listing/${auth.userId}`} exact>
          Add Listing
        </NavLink>
      </li>)}
      {auth.isLoggedIn && (
        <li>
          <button
            onClick={() => {
              auth.logOut();
              history.push('/') 
            }}
          >
            Log Out{" "}
          </button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
