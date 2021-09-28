import React, { useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {AuthContext} from '../../Shared/components/context/auth-context'

import UseFormNewListing from './UseFormNewListing';
import Card from '../../Shared/components/UIElements/Card';

// import ImageUpload from '../../Shared/components/FormElements/ImageUpload';

import './NewListing.css';


const NewListing = ({ submitForm }) => {
  const auth = useContext(AuthContext);

  const [saveError, setSaveError] = useState()

  const userId = useParams();

  const userIdString = userId.id;
  
  const history = useHistory()
  
  const onSave = async (newListing) => {
    try{
      const response = await fetch('/api/listings/create_listing', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
        },
          body: JSON.stringify(newListing)
      })

      console.log('Create response is', response)
            if (response.status === 500) {
                let errorMessage = await response.text()
                console.log('We had an error.  it was: ', errorMessage)
                setSaveError(errorMessage)
            }
            else {
                setSaveError(undefined)
                history.push(`/user_profile/${userIdString}`)
            
        }
      } catch (error) {
            console.error('Fetch failed to reach the server.')
        }
  }

  return (
    <Card>
    <UseFormNewListing 
        onSave={onSave} 
        saveError={saveError} 
        saveButtonCaption="Add Listing"
    />
    </Card>
)
}

export default NewListing;