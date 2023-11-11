"use client";
import { useState } from 'react'
import { useSelector } from 'react-redux';

export default function SearchBar() {
    const [isVisible, setIsVisible] = useState(false);
    const [result, setResult] = useState([]);
    // const [pokemons, setPokemons]= useState([]);
    const pokemonList = useSelector(state => state.pokemonList.list);

    const filterResult = (e)=>{
        const value = e.target.value.toLowerCase();
        setResult(pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(value)));
        result.length>0? setIsVisible(true) : setIsVisible(false);
        (value == null || value == undefined || value == '')  && closeResults();
    }
    const closeResults = () => {
        setIsVisible(false);
    }

  return (
    <>
    <div className='relative w-full max-w-md z-50'>
        <div className="relative w-full overflow-hidden rounded-md">
            <input className="border shadow-inner px-2 py-1 rounded-md w-full focus:outline-none" onFocus={filterResult} onChange={filterResult} placeholder="Search..."/>
            <button className="material-symbols-outlined absolute right-1 top-1 cursor-pointer text-white bg-slate-900 -mx-2 -my-1 h-full w-11">search</button>
        </div>
        {isVisible && <div className='w-full absolute z-10 bg-white border rounded-md shadow-md'>
            <ul>
                {result.map((pokemon) =>(
                    <a href='#' className='block px-2 py-2 hover:bg-gray-50 capitalize text-sm text-gray-500' key={pokemon.name}>{pokemon.name}</a>
                ))}
            </ul>
        </div>}
    </div>
    {isVisible && <div onClick={closeResults} className='overlay absolute w-screen h-screen top-0 right-0 backdrop:blur-sm z-40'></div>}
    </>
  )
}
