import React, { useState } from "react";
import { useHistory, useParams , Link } from "react-router-dom";

import "./NewListing.css";

const useFormNewListing = ({
  category,
  title,
  description,
  quantity,
  image,
  location,
  onSave,
  saveError,
  saveButtonCaption,
}) => {
  const [insertedCategory, setInsertedCategory] = useState(category);
  const [insertedTitle, setInsertedTitle] = useState(title);
  const [insertedDescription, setInsertedDescription] = useState(description);
  const [insertedQuantity, setInsertedQuantity] = useState(quantity);
  const [insertedImage, setInsertedImage] = useState(image);
  const [insertedLocation, setInsertedLocation] = useState(location);

  const userId = useParams();

  const userIdString = userId.id;

  console.log("userIdString", userIdString);

  const history = useHistory();

  async function onSaveClicked() {
    console.log("Create has been clicked!");
    let newListing = {
      category: insertedCategory,
      title: insertedTitle,
      // image: insertedImage,
      description: insertedDescription,
      quantity: insertedQuantity,
      location: insertedLocation,
      userId: userIdString,
    };
    console.log("Creating new listing", newListing);
    onSave(newListing);
  }
  // const imageUpload = async (event) => {
  //   const file = event.target.files[0];
  //   console.log("file:", file);
  //   const fileName = encodeURIComponent(file.name);
  //   console.log("fileName:", fileName);
  //   setInsertedImage(file);
  // }

  const onInputChange = (event, setFunction) => {
    console.log("Changing input to be ", event.target.value);
    setFunction(event.target.value);
  };

  return (
    <div className="listing-form">
      <label htmlFor="category">Category</label>
      <select
        className="form-input"
        value={insertedCategory}
        onChange={(event) => onInputChange(event, setInsertedCategory)}
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
        placeholder="Enter a title"
        value={insertedTitle}
        onChange={(event) => onInputChange(event, setInsertedTitle)}
      />
      <label htmlFor="description">Description</label>
      <textarea
        className="form-input"
        type="text"
        placeholder="Enter a description"
        value={insertedDescription}
        onChange={(event) => onInputChange(event, setInsertedDescription)}
      />
      {/* <label htmlFor="image">Image</label>
      <input
        className="form-input"
        id="file"
        name="file"
        type="file"
        onChange={(event) => imageUpload(event)}
      /> */}
      <label htmlFor="quantity">Quantity</label>
      <input
        className="form-input"
        type="number"
        min="1"
        placeholder="Enter a quantity"
        value={insertedQuantity}
        onChange={(event) => onInputChange(event, setInsertedQuantity)}
      />
      <label htmlFor="location">Location</label>
      <input
        className="form-input"
        type="text"
        placeholder="Enter a location"
        value={insertedLocation}
        onChange={(event) => onInputChange(event, setInsertedLocation)}
      />
      <button onClick={onSaveClicked}>{saveButtonCaption}</button>
      {/* { saveError && <div>{saveError}</div> }       */}
      <div>
        <Link to={`/user_profile/${userIdString}`} >Back to Profile</Link>
      </div>
    </div>
  );
};

export default useFormNewListing;
