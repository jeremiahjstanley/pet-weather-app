import React from "react";
import { withRouter, Route } from "react-router-dom";

import PetsContainer from "../PetContainer";
import AddNewPet from "../AddNewPet";
import PetDetails from "../PetDetails";

import "./App.scss";

function App() {
  return (
    <main className="app">
      <Route exact path="/" component={PetsContainer} />
      <Route exact path="/pets/details" component={PetDetails} />
      <Route
        exact
        path="/pets/:id"
        render={({
          match: {
            params: { id }
          }
        }) => <PetDetails id={id} />}
      />
      <Route exact path="/pet/new" component={AddNewPet} />
    </main>
  );
}

export default withRouter(App);
