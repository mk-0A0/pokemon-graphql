import {gql} from "@apollo/client";
import {Pokemon} from "../../types";

// graphqlのqueryをjsの変数に入れる
export const PokemonsQuery = gql`
    query pokemons($first: Int!){
        pokemons(first: $first) {
            id
            number
            name
        }
    }
`

export type PokemonsData = {
  pokemons: Pokemon[]
}