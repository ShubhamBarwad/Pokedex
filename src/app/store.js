import { configureStore } from "@reduxjs/toolkit";
import pokemonListReducer from "@/feature/pokemonList/pokemonListSlice";
import pokeballLoaderReducer from "@/feature/pokemonList/pokeballLoaderSlice";
import viewSwitcherReducer from "@/feature/pokemonList/viewSwitcherSlice";


export default configureStore({
    reducer: {
        pokemonList: pokemonListReducer,
        isLoading: pokeballLoaderReducer,
        view: viewSwitcherReducer
    },
})