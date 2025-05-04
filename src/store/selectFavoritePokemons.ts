import { SinglePokemon } from "@/pokemons";
import { RootState } from ".";
import { createSelector } from "@reduxjs/toolkit";

export const selectFavoritePokemons = createSelector(
  (state: RootState) => state.pokemons.favorites,
  (favorites: { [key: string]: SinglePokemon }) => Object.values(favorites)
);
