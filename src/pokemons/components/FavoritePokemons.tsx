"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";

export const FavoritePokemons = () => {
  const favoritosFromState = useAppSelector((state) => state.pokemons);
  const favoritos = Object.values(favoritosFromState);

  return <PokemonGrid pokemons={favoritos} />;
};
