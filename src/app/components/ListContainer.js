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
    const [prev, setPrev] = useState();
    const [count, setCount] = useState(1);

    useEffect(()=>{
      setIsLoading(true);
      axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response => {
        console.log(response);
        if(response.data.previous){
          setPrev(response.data.previous);
        }
        setNext(response.data.next);
        setPokemonList(response.data.results);
        return axios.all(response.data.results.map(pk => axios.get(pk.url)));
      })
      .then(response => {
        setPokemonData(response);
        setIsLoading(false);
      })
    }, []);

    const loadNextPrev = (next) => {
      setIsLoading(true);
      axios.get(next)
        .then(response => {
          if(response.data.previous){
            setPrev(response.data.previous);
          }
          setNext(response.data.next);
          setPokemonList(response.data.results);
          setCount(count+1);
          return axios.all(response.data.results.map(pk => axios.get(pk.url)))
        })
        .then(response => {
          setPokemonData(response);
          setIsLoading(false);
          window.scrollTo(0,0);
        })
    }

    const stringify = (num) => {
        let idString = '';
        for(let i = 0; i < 6-JSON.stringify(num).length; i++){
          idString = idString.concat('0');
        }
        idString = idString.concat(JSON.stringify(num));
        return idString;
    }
  return (
    <>
      <div className='w-full py-10 grid grid-cols-responsive gap-x-10 gap-y-4 justify-center md:justify-between'>
        {isLoading && <Loader/>}
          {pokemonData.map(el=>
                  <Card key={el.name} data={el} stringify={stringify}/>
              )
          }
      </div>
      {!isLoading && <MyPagination next={next} prev={prev} loadNextPrev={loadNextPrev} count={count}/>}
    </>
  )
}

export default ListContainer