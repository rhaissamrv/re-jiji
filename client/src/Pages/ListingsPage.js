import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import Card from "../Shared/components/UIElements/Card";

import "./ListingsPage.css";

const ListingsPage = () => {
  const [loadListings, setLoadListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      let allListings;
      try {
        allListings = await fetch("/api/listings", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        let listingsData = await allListings.json();
        // console.log("listingsData:", listingsData);

        setLoadListings(listingsData.listings);
      } catch (err) {
        console.log(err);
      }
    };
    fetchListings();
  }, []);


  return (
    <div className="main-div">
      <h2 className="h2"> All Listings </h2>
      <div>
        <div className="user-profile-wrap-div">
          {loadListings.map((listing) => {
            return (
              <Card>
                <div>
                  <div>Title: {listing.title} </div>
                  <div>Category: {listing.category} </div>
                  <div>Image: {listing.image} </div>
                  <div>Description: {listing.description} </div>
                  <div>Quantity: {listing.quantity} </div>
                  <div>Location: {listing.location} </div>
                  {/* <div>User: {listing.userId} </div> */}
                </div>
                <Link to={`/listings/user/${listing.userId}`}>See user info</Link>
              </Card>
            );
          })}
          {}
        </div>
      </div>
    </div>
  );
};

export default ListingsPage;
