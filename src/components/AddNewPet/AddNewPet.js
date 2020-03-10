import React, { useState, Fragment } from "react";
import { useMutation } from "@apollo/react-hooks";
import { useForm } from "react-hook-form";

import { addPetMutation } from "../../services/queries";
import { withRouter, Link } from "react-router-dom";

import { petTypes } from "./types";
import { petBreeds } from "./breeds";

import "./AddNewPet.scss";

function AddNewPet() {
  const [addPet, { data, loading }] = useMutation(addPetMutation);
  const [type, setType] = useState();
  const { register, handleSubmit } = useForm();
  const onSubmit = variables => {
    addPet({ variables: { ...variables } });
  };

  const displayTypes = () =>
    petTypes.map((type, i) => (
      <option key={i} value={type}>
        {type}
      </option>
    ));

  const displayBreeds = () => {
    if (!type) {
      return <option disabled>Please Select a Type</option>;
    } else {
      return petBreeds[type].map((breed, i) => {
        return (
          <option key={i} value={breed}>
            {breed}
          </option>
        );
      });
    }
  };

  if (!!loading) return <div>...Loading </div>;

  if (!!data) {
    const { name, id } = data.addPet;
    return (
      <div className="success-message">
        <h1 className="success-message--header">They're In!</h1>
        <p className="success-message--text">Successfully added {name}</p>
        <Link className="success-message--link" to={`/pets/${id}`}>
          Visit {name}'s Detail Page
        </Link>
        <Link className="success-message--link" to="/">
          See All Pets
        </Link>
      </div>
    );
  }

  return (
    <Fragment>
      <h1 className="add-new-pet-header">Add a New Pet</h1>
      <form className="add-new-pet-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="add-new-pet-form--field"
          name="name"
          placeholder="name"
          ref={register({ required: true })}
        />
        <select
          className="add-new-pet-form--field"
          name="type"
          defaultValue="null"
          ref={register({ required: true })}
          value={type}
          onChange={e => {
            setType(e.target.value);
          }}
        >
          <option>select type</option>
          {displayTypes()}
        </select>
        <select
          className="add-new-pet-form--field"
          name="breed"
          defaultValue="null"
          ref={register({ required: true })}
        >
          <option>select breed</option>
          {displayBreeds()}
        </select>
        <input
          className="add-new-pet-form--field"
          name="location"
          placeholder="city, state"
          ref={register({ required: true })}
        />
        <input
          className="add-new-pet-form--field"
          name="latitude"
          placeholder="latitude"
          ref={register({ required: true, max: 90, min: -90 })}
        />
        <input
          className="add-new-pet-form--field"
          name="longitude"
          placeholder="longitude"
          ref={register({ required: true, max: 180, min: -180 })}
        />
        <input type="submit" />
        <Link className="add-new-pet-form--link" to="/">
          See All Pets
        </Link>
      </form>

    </Fragment>
  );
}

export default withRouter(AddNewPet);
