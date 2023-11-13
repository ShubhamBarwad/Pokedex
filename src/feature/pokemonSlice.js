import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        data: [],
    },
    reducers: {
        setPokemon(state, action){
            state.data = action.payload;
        },
    },
});
export const { setPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;