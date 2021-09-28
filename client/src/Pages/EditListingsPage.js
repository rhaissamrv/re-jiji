import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {AuthContext} from '../Shared/components/context/auth-context'
// import UseFormNewListing from '../components/ListingForm/UseFormNewListing';
import EditListingForm from '../components/EditAndDeleteListings/EditListingForm'
import Card from '../Shared/components/UIElements/Card';

// import './NewListing.css';

const EditListingsPage = () => {

    const auth = useContext(AuthContext);

    const [loading, setLoading] = useState();
    
    const [loadedListing, setLoadedListing]= useState({});

    const [saveError, setSaveError] = useState()

    const [listingId, setListingId] = useState()
  
    
    const itemId = useParams();
    // const listingIdString = listingId.id;
    console.log('LISTING_ID:', itemId)
    
    const history = useHistory()
    
    // useEffect(() => {
    //   console.log('itemId:', itemId);
    //   setListingId(itemId.id);

    // }, [])
    useEffect(async () => {
        setLoading(true);
        const fetchListings = async () => {
          try {
            let receivedListings = await fetch(
              `/api/listings/${itemId.id}`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            let responseListings = await receivedListings.json();
            console.log("responseListings:", responseListings)
            setLoadedListing(responseListings.listing);
          } catch (err) {
            console.log("error:", err);
          }
          setLoading(false);
        };
        await fetchListings();
      }, [listingId]);
    
      console.log("loadedListing:", loadedListing)

    
    const onSave = async (newListing) => {
      try{
        const response = await fetch(`/api/listings/${itemId.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
          },
            body: JSON.stringify(newListing)
        })
  
        console.log('Edit response is', response)
              if (response.status === 500) {
                  let errorMessage = await response.text()
                  console.log('We had an error.  it was: ', errorMessage)
                  setSaveError(errorMessage)
              }
              else {
                  setSaveError(undefined)
                  history.push(`/user_profile/${auth.userId}`)

                  console.log('AUTH.USERID:', auth.userId)
              
          }
        } catch (error) {
              console.error('Fetch failed to reach the server.')
          }
    }
  
    return (
      // <Card>
      <div>
      <EditListingForm 
          onSave={onSave} 
          saveError={saveError} 
          saveButtonCaption="Edit Listing"
          listing={loadedListing}
      />
      </div>
      // </Card>
  )

}
export default EditListingsPage;