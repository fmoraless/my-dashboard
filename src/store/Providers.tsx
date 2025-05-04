"use client";

import { useEffect } from "react";
import { store } from "./index";
import { Provider } from "react-redux";
import { setFavoritePokemons } from "./pokemons/pokemons";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favorite-pokemons") ?? "{}"
    );
    console.log("favorites", favorites);
    store.dispatch(setFavoritePokemons(favorites));
  }, []);
  return <Provider store={store}>{children}</Provider>;
};
