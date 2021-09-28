import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import EditListing from '../../Pages/EditListingsPage';
import ListingsByUserId from '../../Pages/ListingsByUserId';

const EditListingForm = ({ onSave, saveError, saveButtonCaption, listing}) => {
    const [insertedCategory, setInsertedCategory] = useState('');
    const [insertedTitle, setInsertedTitle] = useState('');
    const [insertedDescription, setInsertedDescription] = useState('');
    const [insertedQuantity, setInsertedQuantity] = useState('');
    const [insertedLocation, setInsertedLocation] = useState('');

    useEffect(() => {
      setInsertedCategory(listing.category)
      setInsertedTitle(listing.title)
      setInsertedDescription(listing.description)
      setInsertedQuantity(listing.quantity)
      setInsertedLocation(listing.location)
    }, [listing])
    
    console.log('listing:', listing)
    const userId = useParams();

    const userIdString = userId.id;

    // const listingId = userId.listing;
    
    console.log('userIdString', userIdString)

    const history = useHistory()

    
    async function onSaveClicked() {
        
        console.log('Create has been clicked!')
        let newListing = {
            category: insertedCategory,
            title: insertedTitle,
            //image:'',
            description: insertedDescription,
            quantity: insertedQuantity,
            location: insertedLocation,
            userId: userIdString
        }
        console.log('Creating new listing', newListing )
        onSave(newListing)
    }
    const onInputChange = (event, setFunction) => {
        console.log('Changing input to be ', event.target.value)
        setFunction(event.target.value);
    };

    return (

        <div className="listing-form">
          <label htmlFor="category">Category</label>
          <select
            className="form-input"
            value={insertedCategory}
            onChange={(event) => onInputChange(event,setInsertedCategory)}
          >
            <option>Paper</option>
            <option>Plastic</option>
            <option>Electronic</option>
            <option>Glass</option>
            <option>Metal</option>
            <option>Furniture</option>
            <option>Textile</option>
            <option>Recyclables</option>
            <option>Other</option>
          </select>
          <label htmlFor="title">Title</label>
          <input
            className="form-input"
            type="text"
            placeholder={insertedCategory}
            value={insertedTitle}
            onChange={(event) => onInputChange(event,setInsertedTitle)}
            
          />
          <label htmlFor="description">Description</label>
          <textarea
            className="form-input"
            type="text"
            placeholder="Enter a description"
            value={insertedDescription}
            onChange={(event) => onInputChange(event,setInsertedDescription)}
          />
          <label htmlFor="quantity">Quantity</label>
          <input
            className="form-input"
            type="number"
            min="1"
            placeholder="Enter a quantity"
            value={insertedQuantity}
            onChange={(event) => onInputChange(event,setInsertedQuantity)}
          />
          <label htmlFor="location">Location</label>
          <input
            className="form-input"
            type="text"
            placeholder="Enter a location"
            value={insertedLocation}
            onChange={(event) => onInputChange(event,setInsertedLocation)} />
          <button className="form-input-btn" onClick={ onSaveClicked }>{saveButtonCaption}</button>
            {/* { saveError && <div>{saveError}</div> }             */}
        </div>
    )
}
// , history.push(`/user_profile/${userIdString}`
export default EditListingForm;
