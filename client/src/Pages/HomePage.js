import React from "react";
import { Link } from "react-router-dom";
import CategoryNavLinks from "../components/Listings/components/CategoryNavLinks";
import ListingsNavComponent from "../components/Listings/components/ListingsNavComponent";
import BodyDiv from "../components/Pagestyling/BodyDiv";

import "./HomePage.css";
import ListingsPage from "./ListingsPage";
const HomePage = () => {
  return (
    <div className="home-page-div">
      <div className="home-page-div-one">
        <BodyDiv />
      </div>
      {/* <div className="home-page-div-two">
      <ListingsNavComponent/>
      </div> */}
      <div>
        <CategoryNavLinks />
      </div>
    </div>
  );
};

export default HomePage;
