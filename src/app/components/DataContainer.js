import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import Loader from './Loader';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingState } from '@/feature/pokemonList/pokeballLoaderSlice';
import NameComponent from './NameComponent';
import PrimaryData from './PrimaryData';
import ImageSlider from './ImageSlider';

function DataContainer() {

    const pokemonName = usePathname().split('/')[usePathname().split('/').length-1];
    const POKEMON_DATA_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/'+pokemonName;
    const [thisPokemonData, setThisPokemonData] = useState({});
    const [thisPokemonName, setThisPokemonName] = useState();
    const [thisPokemonImage, setThisPokemonImage] = useState();
    const [primaryImageSet, setPrimaryImageSet] = useState([]);
    const [abilities, setAbilities] = useState();
    const [typeSet, setTypeSet] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(setLoadingState(true));
      axios.get(POKEMON_DATA_ENDPOINT)
        .then(result=>{
          setThisPokemonData(result.data);
          setPokemonAttribute(result.data.name, setThisPokemonName);
          setPokemonAttribute(result.data.sprites.other['official-artwork']['front_default'], setThisPokemonImage);
          setPokemonAttribute(result.data.sprites.other['official-artwork'], setPrimaryImageSet);
          setPokemonAttribute(result.data.types, setTypeSet);
          setPokemonAttribute(result.data.abilities, setAbilities);
          dispatch(setLoadingState(false))
        })
    }, []);

    const setPokemonAttribute = (attribute, setAttribute)=>{
      if(typeof attribute === 'object'){
        let array = [];
        for(let key in attribute){
          array.push(attribute[key]);
        }
        setAttribute(array);
      }else{
        setAttribute(attribute);
      }
    }
    
  return (
    <>
      {thisPokemonData && <div className='w-full min-h-screen pt-20 px-2 md:px-20 lg:px-40 xl:56'>
          <NameComponent name={thisPokemonName}/>
          <PrimaryData image={thisPokemonImage} name={thisPokemonName} imageSet={primaryImageSet} type={typeSet} data={thisPokemonData} abilities={abilities}/>
      </div>}
      <Loader/>
    </>
  )
}

export default DataContainer