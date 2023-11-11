import { createSlice } from "@reduxjs/toolkit";

export const pokeballLoaderSlice = createSlice({
    name: 'pokeballLoader',
    initialState: {
        isLoading: true,
    },
    reducers: {
        setLoadingState(state, action){
            state.isLoading = action.payload;
        }
    }
});

export const { setLoadingState } = pokeballLoaderSlice.actions;

export default pokeballLoaderSlice.reducer;