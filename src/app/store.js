import { configureStore } from "@reduxjs/toolkit";
import pokemonListReducer from "@/feature/pokemonList/pokemonListSlice";
import pokeballLoaderReducer from "@/feature/pokemonList/pokeballLoaderSlice";
import viewSwitcherReducer from "@/feature/pokemonList/viewSwitcherSlice";
import pokemonReducer from "@/feature/pokemonSlice";


export default configureStore({
    reducer: {
        pokemonList: pokemonListReducer,
        isLoading: pokeballLoaderReducer,
        view: viewSwitcherReducer,
        pokemon: pokemonReducer,
    },
})