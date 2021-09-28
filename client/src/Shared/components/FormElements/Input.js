import React, { useReducer, useEffect } from "react";

import { validate } from "../../../components/util/validators";
import ListingCategories from "./ListingCategories";
import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state, //copies the old state object and all key:value pairs of the old object into this new object
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    //the first argument is an action and the second argument is the initial state, which is optional
    value: "",
    isTouched: false,
    isValid: false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const element = () => {
    if (props.element === "input") {
      return (
        <input
          className="form-input"
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          onChange={changeHandler}
          onBlur={touchHandler}
          value={inputState.value}
        />
      );
    } else if (props.element === "select") {
      return (
        <select
          className="form-input"
          id={props.id}
          type={props.type}
          onChange={changeHandler}
          // onBlur={touchHandler}
          value={inputState.value}
        >
          <ListingCategories id="paper" displayedCategory="Paper" />
          <ListingCategories id="plastic" displayedCategory="Plastic" />
          <ListingCategories id="electronic" displayedCategory="Electronic" />
          <ListingCategories id="glass" displayedCategory="Glass" />
          <ListingCategories id="metal" displayedCategory="Metal" />
          <ListingCategories id="furniture" displayedCategory="Furniture" />
          <ListingCategories id="textile" displayedCategory="Textile" />
          <ListingCategories id="recyclabes" displayedCategory="Recyclables" />
          <ListingCategories id="other" displayedCategory="Other" />
        </select>
      );
    } else {
      return (
        <textarea
          className="form-input"
          id={props.id}
          rows={props.rows || 3}
          onChange={changeHandler}
          onBlur={touchHandler}
          value={inputState.value}
        />
      );
    }
  };

  return (
    <div className="form-inputs">
      <label htmlFor={props.id}>{props.label}</label>
      {element()}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
