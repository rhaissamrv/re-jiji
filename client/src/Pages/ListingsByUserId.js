import React, { useState, useEffect, useContext } from "react";

import { useParams, Link } from "react-router-dom";

import { AuthContext } from '../Shared/components/context/auth-context';

import Card from "../Shared/components/UIElements/Card";

const ListingsByUserId = () => {
  const [loadedListings, setLoadedListings] = useState([]);
  const [loading, setLoading] = useState(false);

  const auth = useContext(AuthContext);

  const userId = useParams();

  const userIdString = userId.id;

  console.log('userIdString:', userIdString)

  useEffect(async () => {
    setLoading(true);
    const fetchListings = async () => {
      try {
        let receivedListings = await fetch(
          `/api/listings/user/${userIdString}`,
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
    await fetchListings();
  }, [userIdString]);

  console.log("loadedListings:", loadedListings)

  return (
    <div>
      {loadedListings.map((i) => {
        return (
          <div>
          <Card>
            <div>Category: {i.category} </div>
            <div>Title: {i.title} </div>
            <div>Image: {i.image} </div>
            <div>Description: {i.description} </div>
            <div>Quantity: {i.quantity} </div>
            <div>Location: {i.location} </div>
          </Card>
          </div>
        );
      })}
    </div>
  );
};
export default ListingsByUserId;