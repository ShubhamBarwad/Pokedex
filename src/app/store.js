import { configureStore } from "@reduxjs/toolkit";
import pokemonListReducer from "@/feature/pokemonList/pokemonListSlice";


export default configureStore({
    reducer: {
        pokemonList: pokemonListReducer
    },
})