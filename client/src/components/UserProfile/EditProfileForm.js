import { useState } from "react"

const EditProfileForm = ({userName,email,location,image,listings,onSave, saveError, saveButtonCaption}) => {
    let [updatedName, setUpdatedName] = useState(userName)
    let [updatedEmail, setUpdatedEmail] = useState(email)
    let [updatedLocation, setUpdatedLocation] = useState(location)
    let [updatedImage, setUpdatedImage] = useState(img)
    let [updatedListing, setUpdatedListing] = useState(listings)


    async function onSaveClicked() {
        console.log('Create has been clicked!')
        let updatedUser = {
            name: updatedName,
            email: updatedEmail,
            location:updatedLocation,
            image:updatedImage,
            listings:listings
        }
        console.log('Creating user with', updatedUser)
        onSave(updatedUser)
    }

    const onInputChange = (event, setFunction) => {
        console.log('Changing input to be ', event.target.value)
        setFunction(event.target.value);
    };

    let createSuperheroDataInvalid = !updatedName || (updatedName.trim().length === 0)

    return (
        <div>
            <div>
            <label htmlFor="userName">User Name</label>
            <input id="userName" value={updatedName} onChange={(event) => onInputChange(event,setUpdatedName)}/>
            </div>
            <div>
            <label htmlFor="email">Email</label>
            <input id="email" value={updatedEmail} onChange={(event) => onInputChange(event,setUpdatedEmail)}/>
            </div>
            <div>
            <label htmlFor="location">Location</label>
            <input id="location" value={updatedLocation} onChange={(event) => onInputChange(event,setUpdatedLocation)}/>
            </div>
            <div>
            <label htmlFor="image">Image</label>
            <input id="image" value={updatedImage} onChange={(event) => onInputChange(event,setUpdatedImage)}/>
            </div>
            <div>
            <label htmlFor="listing">Listing</label>
            <input id="listing" value={updatedListing} onChange={(event) => onInputChange(event,setUpdatedListing)}/>
            </div>
            <button disabled={ createUserDataInvalid } onClick={ onSaveClicked }>{saveButtonCaption}</button>
            { saveError && <div>{saveError}</div> }
        </div>
    )
}

   export default EditProfileForm
