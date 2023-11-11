'use client'
import React, { useEffect, useState } from 'react';
import RandomizeBtn from './RandomizeBtn';
import ListContainer from './ListContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getList, setList } from '@/feature/pokemonList/pokemonListSlice';
import axios from 'axios';

function Container() {
  const  ALL_POKEMON_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon?limit=1500'
  const [pokemonList, setPokemonList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(ALL_POKEMON_ENDPOINT)
      .then(response => {
        dispatch(setList(response.data.results));
      });
  }, [])
  

  return (
    <div className='w-full min-h-screen pt-20 px-2 md:px-20 lg:px-40 xl:56'>
        <RandomizeBtn/>
        <ListContainer/>
    </div>
  )
}

export default Container