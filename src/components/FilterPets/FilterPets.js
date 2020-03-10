import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { useForm } from "react-hook-form";

import { searchPetsQuery } from "../../services/queries";
import { withRouter } from "react-router-dom";

import "./FilterPets.scss";

function FilterPets({ filterPets }) {
  const [searchPets, { data }] = useLazyQuery(searchPetsQuery);
  const { register, handleSubmit } = useForm();
  const onSubmit = ({ variable, search }) => {
    searchPets({ variables: { [variable]: search } });
  };

  useEffect(() => {
    !!data && filterPets(data.pets);
  }, [filterPets, data]);

  if (!!data && !!data.searchPets) {
    filterPets(data.searchPets);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="filter-pet-form">
      <select name="variable" defaultValue="Location" ref={register}>
        <option value="location">Location</option>
        <option value="name">Name</option>
        <option value="breed">Breed</option>
      </select>
      <input
        name="search"
        placeholder="search"
        ref={register({ required: true })}
      />
      <input type="submit" />
    </form>
  );
}

export default withRouter(FilterPets);
