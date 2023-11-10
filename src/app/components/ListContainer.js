'use client';

import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import Loader from './Loader';
import MyPagination from './MyPagination';

function ListContainer() {
    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonData, setPokemonData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [next, setNext] = useState();

    useEffect(()=>{
      setIsLoading(true);
      if(next){
        axios.get(next)
        .then(response => {
          // debugger;
          setNext(response.data.next);
          setPokemonList(response.data.results);
          // debugger;
          return axios.all(response.data.results.map(pk => axios.get(pk.url)))
        })
        .then(response => {
          debugger;
          setPokemonData(response)
          setIsLoading(false);
        })
      }else{
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(response => {
          // debugger;
          setNext(response.data.next);
          setPokemonList(response.data.results);
          // debugger;
          return axios.all(response.data.results.map(pk => axios.get(pk.url)))
        })
        .then(response => {
          // debugger;
          setPokemonData(response)
          setIsLoading(false);
        })
      }
    }, [next]);
    const stringify = (num) => {
        let idString = '';
        for(let i = 0; i < 6-JSON.stringify(num).length; i++){
          idString = idString.concat('0');
        }
        idString = idString.concat(JSON.stringify(num));
        return idString;
    }
  return (
    <div className='w-full py-10 grid grid-cols-responsive gap-x-10 gap-y-4 justify-center md:justify-between'>
      {isLoading && <Loader/>}
        {pokemonData.map(el=>
                <Card key={el.name} data={el} stringify={stringify}/>
            )
        }
        <MyPagination next={next} setNext={setNext}/>
    </div>
  )
}

export default ListContainer