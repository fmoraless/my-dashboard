import { SinglePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* 
{
  {
    '1': { id: 1, name: 'bulbasaur', type: 'grass' },
    '2': { id: 2, name: 'ivysaur', type: 'grass' },
  }
}
 */

const getInitialState = (): PokemonsState => {
  //  if (typeof localStorage === "undefined") return {};

  const favorites = JSON.parse(
    localStorage.getItem("favorite-pokemons") ?? "{}"
  );
  return favorites;
};
interface PokemonsState {
  favorites: { [key: string]: SinglePokemon };
}

const initialState: PokemonsState = {
  favorites: {},
  //...getInitialState(),
  /*  "1": { id: "1", name: "bulbasaur" },
  "2": { id: "2", name: "ivysaur" },
  "3": { id: "3", name: "venusaur" },
  "4": { id: "4", name: "charmander" }, */
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons(
      state,
      action: PayloadAction<{ [key: string]: SinglePokemon }>
    ) {
      state.favorites = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<SinglePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;
      if (!!state.favorites[id]) {
        delete state.favorites[id];
        //return;
      } else {
        state.favorites[id] = pokemon;
      }
      localStorage.setItem(
        "favorite-pokemons",
        JSON.stringify(state.favorites)
      );
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
