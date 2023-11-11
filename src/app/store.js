import { configureStore } from "@reduxjs/toolkit";
import pokemonListReducer from "@/feature/pokemonList/pokemonListSlice";
import pokeballLoaderReducer from "@/feature/pokemonList/pokeballLoaderSlice";


export default configureStore({
    reducer: {
        pokemonList: pokemonListReducer,
        isLoading: pokeballLoaderReducer
    },
})