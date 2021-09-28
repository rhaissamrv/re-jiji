import {useState, useEffect} from 'react'
// import React, {useState} from './FormSignUp';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password:'',
    password2:''
});
const [errors, setErrors] = useState({});
const [isSubmitting, setIsSubmitting] = useState (false);
const [error, setError] = useState(false);

//e = events
// handleChange =  when you change something, you want to update the value

const handleChange = e => {
    const {name, value} = e.target;
    setValues ({
        ...values, //spreading the values, targets the name in the formsignup
        [name]:value
    });
};

const handleSubmit = async e => {
    e.preventDefault();
    try{
      const response = await fetch('/api/users/signup', {
          method: 'POST',
          headers: {
              "Content-Type": 'application/json'
          },
          body: JSON.stringify({
              username: values.username,
              email: values.email,
              password: values.password
          })
      });

      const responseData = await response.json(); //this should be our createUser data from users-controllers
      if (response.ok) {
          throw new Error(responseData.message);

      }
      console.log(responseData);
    } catch(err) {
        console.log(err);
        setError(err.message || 'Something went wrong, please try again.');
    };

    setErrors(validate(values));
    setIsSubmitting (true);
};
    useEffect(
        () => {
            if(Object.keys(errors).length === 0 && isSubmitting){
                callback();
            }
        },
        [errors]
    );
    
    return {handleChange, values, handleSubmit, errors};
};

export default useForm;
