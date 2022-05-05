import type {NextPage} from 'next'
import {useQuery} from "@apollo/client";
import {PokemonsData, PokemonsQuery} from "../graphql/queries/pokemons.query";
import {Box, Text, Image, Flex, Grid, Container} from "@chakra-ui/react";
import Link from "next/link";

const Home: NextPage = () => {
  const {data} = useQuery<PokemonsData>(PokemonsQuery, {
    variables: {
      "first": 1000
    }
  })

  return (
    <Container maxW={1000} w={"full"} py={20}>
      <Grid templateColumns={'repeat(3, 1fr)'} gap={10}>
        {data?.pokemons.map((pokemon) => (
          <Link href={`/pokemons/${pokemon.id}`} passHref key={pokemon.id}>
            <Flex as={"a"} alignItems={"center"} borderWidth={1} gap={5} p={4}>
              <Text>{pokemon.number}</Text>
              <Box maxW={50} w={"full"} flexShrink={0}>
                <Image src={pokemon.image}/>
              </Box>
              <Text>{pokemon.name}</Text>
            </Flex>
          </Link>
        ))}
      </Grid>
    </Container>
  )
}

export default Home
