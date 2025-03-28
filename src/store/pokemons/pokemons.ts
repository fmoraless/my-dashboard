import { SinglePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* 
    {
    '1': { id: 1, name: 'bulbasaur', type: 'grass' },
    '2': { id: 2, name: 'ivysaur', type: 'grass' },
 */

interface PokemonsState {
  [key: string]: SinglePokemon;
}

const initialState: PokemonsState = {
  "1": { id: "1", name: "bulbasaur" },
  "3": { id: "3", name: "ivysaur" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SinglePokemon>) {
      const pokemon = action.payload;
      const {id} = pokemon;
      if (!!state[id]) {
        delete state[id];
        return;
      }

      state[id] = pokemon;
  },
}
});

export const {toggleFavorite} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
