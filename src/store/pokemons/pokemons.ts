import { SinglePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* 
    {
    '1': { id: 1, name: 'bulbasaur', type: 'grass' },
    '2': { id: 2, name: 'ivysaur', type: 'grass' },
 */

const getInitialState = (): PokemonsState => {
  const favorites = JSON.parse(
    localStorage.getItem("favorite-pokemons") ?? "{}"
  );
  return favorites;
};
interface PokemonsState {
  [key: string]: SinglePokemon;
}

const initialState: PokemonsState = {
  ...getInitialState(),
  /*  "1": { id: "1", name: "bulbasaur" },
  "2": { id: "2", name: "ivysaur" },
  "3": { id: "3", name: "venusaur" },
  "4": { id: "4", name: "charmander" }, */
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SinglePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;
      if (!!state[id]) {
        delete state[id];
        //return;
      } else {
        state[id] = pokemon;
      }
      localStorage.setItem("favorite-pokemons", JSON.stringify(state));
    },
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
