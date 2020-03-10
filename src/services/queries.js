import { gql } from "apollo-boost";

export const getPetsQuery = gql`
  {
    pets {
      id
      name
      type
      breed
    }
  }
`;

export const getPetQuery = gql`
  query GetPet($id: ID) {
    pet(id: $id) {
      id
      name
      type
      breed
      location
      latitude
      longitude
    }
  }
`;

export const searchPetsQuery = gql`
  query GetPets($location: String, $name: String, $breed: String) {
    searchPets(location: $location, name: $name, breed: $breed) {
      id
      name
      type
      breed
    }
  }
`;

export const addPetMutation = gql`
mutation AddPet($name: String!, $type: String!, $breed: String!, $location: String!, $latitude: String!, $longitude: String!) {
  addPet(name: $name, type: $type, breed: $breed, location: $location, latitude: $latitude, longitude: $longitude) {
    id
    name
    type
    breed
  }
}
`;
