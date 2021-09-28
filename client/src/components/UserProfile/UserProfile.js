import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Shared/components/context/auth-context";
import { Link, useParams } from 'react-router-dom';
import Card from "../../Shared/components/UIElements/Card";

import './UserProfile.css'

const UserProfile = () => {
  const auth = useContext(AuthContext);

  const [loadedListings, setLoadedListings] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // console.log("userId:", userId)
  
  const [user, setUser] = useState({
    userName: "",
    email: "",
    location: "",
    // image: '',
    listings: "",
  });
  useEffect(() => {
    const getUser = async () => {
      let response = await fetch("/api/users/" + auth.userId);
      let data = await response.json();
      if (data.user) {
        setUser(data.user);
      }
    };
    getUser();
  }, [auth.userId]);

  useEffect(() => {
    setLoading(true);
    const fetchListings = async () => {
      try {
        let receivedListings = await fetch(
          `/api/listings/user/${auth.userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        let responseListings = await receivedListings.json();
        setLoadedListings(responseListings.listings);
      } catch (err) {
        console.log("error:", err);
      }
      setLoading(false);
    };
    fetchListings();
  }, [auth.userId]);

  console.log("loadedListings:", loadedListings)
  
  return (
    <div className='user-profile-wrap-div'  >
      <Card>
      <div>
        <div>Name: {user.username} </div>
        <div>Email: {user.email} </div>
        <div>Location: {user.location} </div>
        <div>Image: {user.img} </div>
        <div>Listings: {user.listings.length} </div>
      </div>
      </Card>
      <div>
      {loadedListings.map((i) => {
        return (
          <Card>
            <div>Category: {i.category} </div>
            <div>Title: {i.title} </div>
            <div>Image: {i.image} </div>
            <div>Description: {i.description} </div>
            <div>Quantity: {i.quantity} </div>
            <div>Location: {i.location} </div>
            <div><Link to={`/edit_listing/${i._id}`}>Edit</Link></div>
          </Card>
        );
      })}
    </div>
    </div>
  );
};

export default UserProfile;
