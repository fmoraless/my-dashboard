import { SinglePokemon } from "@/pokemons";
import { createSlice } from "@reduxjs/toolkit";

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
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
});

export const {} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
