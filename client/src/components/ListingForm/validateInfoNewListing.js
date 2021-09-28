export default function validateInfoNewListing(values) {
    let errors = {};
  // trim to removed the white spaces

    if (!values.title.trim()) {
      errors.title = 'Title required';
    }

    if (!values.description.trim()) {
        errors.description = 'Description required';
    }

    if (!values.quantity>0) {
        errors.quantity = 'Please inform the how many items you are listing';
    }
        
    if (!values.location) {
      errors.location = 'Password is required';
    } else if (values.location.length < 6) {
      errors.location = 'Please inform your Postal Code';
    }
  
    return errors;
  }