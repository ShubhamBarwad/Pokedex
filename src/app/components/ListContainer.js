'use client';

import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import Loader from './Loader';
import MyPagination from './MyPagination';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingState } from '@/feature/pokemonList/pokeballLoaderSlice';

function ListContainer() {
    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonData, setPokemonData] = useState([]);
    const dispatch = useDispatch();
    // const [isLoading, setIsLoading] = useState(false);
    const [next, setNext] = useState();
    const [prev, setPrev] = useState();
    const [count, setCount] = useState(1);

    useEffect(()=>{
      setLoading(true);
      axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response => {
        if(response.data.previous){
          setPrev(response.data.previous);
        }
        setNext(response.data.next);
        setPokemonList(response.data.results);
        return axios.all(response.data.results.map(pk => axios.get(pk.url)));
      })
      .then(response => {
        setPokemonData(response);
        setLoading(false);
      })
    }, []);

    const loadNextPrev = (next, num) => {
      if((count===1 && num>0) || (count > 1)){
      setLoading(true);
      axios.get(next)
        .then(response => {
          if(response.data.previous){
            setPrev(response.data.previous);
          }
          setNext(response.data.next);
          setPokemonList(response.data.results);
          setCount(count+num);
          return axios.all(response.data.results.map(pk => axios.get(pk.url)))
        })
        .then(response => {
          setPokemonData(response);
          setLoading(false);
          window.scrollTo(0,0);
        })
      }
    }

    const setLoading = (toggleValue) => {
      dispatch(setLoadingState(toggleValue));
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
          {pokemonData.map(el=>
                  <Card key={el.data.id} data={el} stringify={stringify}/>
              )
          }
      </div>
      <MyPagination next={next} prev={prev} loadNextPrev={loadNextPrev} count={count}/>
    </>
  )
}

export default ListContainer