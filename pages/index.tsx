import type {NextPage} from 'next'
import {useQuery} from "@apollo/client";
import {PokemonsData, PokemonsQuery} from "../graphql/queries/pokemons.query";

const Home: NextPage = () => {
  const {data} = useQuery<PokemonsData>(PokemonsQuery, {
    variables: {
      "first": 1000
    }
  })

  return (
    <>
      {data?.pokemons.map((pokemon) => (
        <p key={pokemon.id}>{pokemon.name}</p>
      ))}
    </>
  )
}

export default Home
