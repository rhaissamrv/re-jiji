import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Card from "../Shared/components/UIElements/Card";
import ListingsByUserId from "./ListingsByUserId";

const UserListings = () => {
 
    const [loadedUsers, setLoadedUsers] = useState([]);

  const userId = useParams();

  const userIdString = userId.id

  useEffect(() => {
      
    const fetchUsers = async () => {
      try {
        let receivedData = await fetch(`/api/users/${userIdString}`, 
        {
          method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
        });
        let responseData = await receivedData.json();
        setLoadedUsers(responseData.user);
    } catch (err) {
        console.log("error:", err);
    }
    console.log("loadedUsers:", loadedUsers);
    };
    fetchUsers();
  }, [userId]);


  return (
    <React.Fragment>
      <div className="main-div">
        <div>
          <h2 className="h2"> All listings from {loadedUsers.username}</h2>
          <div className="user-profile-wrap-div">
                <Card>
                  <div>
                    <div>Username: {loadedUsers.username} </div>
                    <div>Email: {loadedUsers.email} </div>
                    <div>Image: {loadedUsers.image} </div>
                    <div>Listings:{loadedUsers.userId} </div>
                    <ListingsByUserId />
                  </div>
                </Card>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};


export default UserListings;
