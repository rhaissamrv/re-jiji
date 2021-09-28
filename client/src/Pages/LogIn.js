import React, { useState, useContext } from "react";

import Card from "../Shared/components/UIElements/Card";
import LoadingSpinner from "../Shared/components/UIElements/LoadingSpinner.JS";
import Input from "../Shared/components/FormElements/Input";
import Button from "../Shared/components/FormElements/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../components/util/validators";
import { useForm } from "../Shared/hooks/form-hook";
import { AuthContext } from "../Shared/components/context/auth-context";
import { useHttpClient } from "../Shared/hooks/http-hook";
import ErrorModal from "../Shared/components/UIElements/ErrorModal";
import { useHistory } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
// form handiling hook
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  // const switchModeHandler = () => {
  //   if (!isLoginMode) {
  //     setFormData(
  //       {
  //         ...formState.inputs,
  //         name: undefined,
  //       },
  //       formState.inputs.email.isValid && formState.inputs.password.isValid
  //     );
  //   } else {
  //     setFormData(
  //       {
  //         ...formState.inputs,
  //         name: {
  //           value: "",
  //           isValid: false,
  //         },
  //       },
  //       false
  //     );
  //   }
  //   setIsLoginMode(prevMode => !prevMode);
  // };

  const logInSubmitHandler = async (event) => {
    
    event.preventDefault();

    if (isLoginMode) {
      try {
        const responseData = await fetch("/api/users/login", {
          method: "POST",
          body: JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const user = await responseData.json();
        // set up fetch user 
        console.log(user)
        auth.logIn(user._id)
        history.push(`/user_profile/${user._id}`);
      } catch (err) {
        console.log(err);
      }
    }
     else {
      try 
      {
        const responseData = await fetch("/api/users/signup", {
          method: "POST",
          header: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formState.inputs.name.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
        });

        auth.login(responseData.user.id);
      }
       catch (err) {}
    }
  };

  return (
    //handiling the inputes in the form
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Card className="authentication">
        <form onSubmit={logInSubmitHandler}>
          <Input
            className="log-in-input"
            element="input"
            id="email"
            type="email"
            label="E-Mail"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address."
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="password"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Please enter a valid password, at least 6 characters."
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
            {isLoginMode ? "LOGIN" : "SIGNUP"}
          </Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default LogIn;
