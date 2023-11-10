'use client';

import Container from "./components/Container";

export default function Home() {
  // const [pokemons, setPokemons] = useState([]);
  // useEffect(() => {
  //   if(!pokemons.length){
  //       axios.get('https://pokeapi.co/api/v2/pokemon?limit=10000')
  //       .then((response) => {
  //           setPokemons(response.data.results);
  //       })
  //   }
  // }, [])
  return (
    <main>
        <Container/>
    </main>
  )
}
