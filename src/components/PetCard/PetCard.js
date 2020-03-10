import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./PetCard.scss";

function PetCard({ pet: { name, type, breed, id } }) {
  return (
    <li className="pet-card">
      <p className="pet-card--text">{name}</p>
      <p className="pet-card--text">{type}</p>
      <p className="pet-card--text">{breed}</p>
      <Link className="pet-card--link" to={`/pets/${id}`}>
        Details
      </Link>
    </li>
  );
}

export default withRouter(PetCard);
