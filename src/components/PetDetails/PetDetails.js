import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getPetQuery } from "../../services/queries";
import { withRouter, Link } from "react-router-dom";
import WeatherDetails from "../WeatherDetails";

import "./PetDetails.scss";

function PetDetails({ id }) {
  const { loading, data } = useQuery(getPetQuery, {
    variables: { id }
  });

  if (loading) return <div>...Loading </div>;

  return (
    <article className="pet-details">
      <WeatherDetails pet={data.pet} />
      <Link className="pet-details--link" to={`/`}>
        Lookup a different pet
      </Link>
    </article>
  );
}

export default withRouter(PetDetails);
