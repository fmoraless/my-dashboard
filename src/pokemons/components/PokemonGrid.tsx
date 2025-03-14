import React from "react";

import { PokemonCard } from "./PokemonCard";
import { SinglePokemon } from "../interfaces/single-pokemon";

interface Props {
  pokemons: SinglePokemon[];
}
export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
