import {useRouter} from "next/router";

const Pokemons = () => {
  const router = useRouter()
  const {id} = router.query
  console.log(router.query)

  return <>{id}</>
}

export default Pokemons