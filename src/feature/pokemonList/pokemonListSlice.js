import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";

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