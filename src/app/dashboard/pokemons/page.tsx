import { PokemonGrid, PokemonsResponse, SinglePokemon } from "@/pokemons";

export const metadata = {
  title: "151 Pokemons",
  description: "Ad minim sit cupudatat culpa consecteur",
};

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SinglePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));
  //throw new Error("Error al cargar los pokemons");
  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado Pokemons <small className="text-blue-500">Estatico</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
