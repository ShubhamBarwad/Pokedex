import { createSlice } from "@reduxjs/toolkit";

export const pokemonListSlice = createSlice({
    name: 'pokemonList',
    initialState: {
        list: [],
    },
    reducers: {
        setList(state, action){
            state.list = action.payload;
        },
    },
    xtraReducers: {
      },
});
export const { getList, setList } = pokemonListSlice.actions;

export default pokemonListSlice.reducer;