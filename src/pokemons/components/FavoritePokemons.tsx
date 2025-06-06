"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { IoHeartOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { selectFavoritePokemons } from "@/store/selectFavoritePokemons";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector(selectFavoritePokemons);

  const [pokemons, setPokemons] = useState(favoritePokemons);

  useEffect(() => {
    setPokemons(favoritePokemons);
  }, [favoritePokemons]);

  return (
    <>
      {pokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokemonGrid pokemons={pokemons} />
      )}
    </>
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favotitos</span>
    </div>
  );
};
