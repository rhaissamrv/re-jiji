import React,{useState, useEffect} from "react";
// import BodyDiv from "../components/Pagestyling/BodyDiv";
import Card from "../Shared/components/UIElements/Card";

const DisplayListingsByCategory = ({category}) => {

        const [loadListingsByCategory, setLoadListingsByCategory] = useState([]);

        useEffect(() => {
            const fetchListings = async () => {
            
            // let listingsByCategory;
            //  try {
               let listingsByCategory = await fetch ("/api/listings/categories/"+category,
            {
                method: "GET",
                headers: {
                "Content-Type": "application/json",
               }
            });
            let responseData = await listingsByCategory.json();
            console.log("responseData:", responseData);
            // history.push('/listingsProfile')
            setLoadListingsByCategory(responseData.listings);
            // } catch (err) {
        //  console.log(err);
 
        // history.push('/listingsPage')
        }
        fetchListings();
        }, [category])
      //  })

        return (
            <div className="main-div">
              <div className="user-profile-wrap-div">
                    {loadListingsByCategory.map((listing) => {
                      return (
                        <Card>
                          <div>
                            <div>Title: {listing.title} </div>
                            <div>Image: {listing.image} </div>
                            <div>Description: {listing.description} </div>
                            <div>Quantity: {listing.quantity} </div>
                            <div>Location: {listing.location} </div>
                            {/* <div>User: {listing.userId} </div> */}
                          </div>
                          <a href={`/listings/user/${listing.userId}`}>See user info</a>
                        </Card>
                      );
                    })}
                  </div>
                </div>
         );
        };



export default DisplayListingsByCategory;