import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { withRouter, Link } from "react-router-dom";
import FilterPets from "../FilterPets";
import { getPetsQuery } from "../../services/queries";
import PetCard from "../PetCard";

import "./PetContainer.scss";

function PetContainer() {
  const { loading, data } = useQuery(getPetsQuery);
  const [pets, setPets] = useState(null);

  if (loading) return <div>...Loading </div>;

  const petCards = pets || data.pets;

  return (
    <article className="pet-container">
      <h1 className="pet-container--header">Does my pet need an Umbrella?</h1>
      <FilterPets filterPets={setPets} />
      <ul className="pet-container--cards">
        {petCards.map((pet, i) => (
          <PetCard pet={pet} key={i} />
        ))}
      </ul>
      <Link className="pet-container--link" to="/pet/new">
        Add New Pet
      </Link>
    </article>
  );
}

export default withRouter(PetContainer);
