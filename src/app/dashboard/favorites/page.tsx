import { PokemonGrid } from "@/pokemons";

export const metadata = {
  title: "Favoritos",
  description: "Ad minim sit cupudatat culpa consecteur",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemons favoritos <small className="text-blue-500">Global state</small>
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
