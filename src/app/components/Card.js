import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TypeBricks from './TypeBricks';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setPokemon } from '@/feature/pokemonSlice';
import { redirect } from 'next/navigation';

function Cards({key, data, stringify, view}) {
  const card = useRef();
  const nameType = useRef();
  const image = useRef();
  const dispatch = useDispatch();
  const redirectUrl = '/pokemon/'+data.data.name;
  useEffect(() => {
    card.current.classList = [];
    nameType.current.classList = [];
    image.current.classList = [];
    if(view==='list'){
      card.current.classList.add(['flex'], ['rounded-2xl'], ['items-center'], ['justify-start'], ['gap-2'], ['py-3'], ['px-2'], ['duration-100'], ['cursor-pointer']);
      nameType.current.classList.add(['flex'], ['flex-col']);
      image.current.classList.add(['w-1/3'], ['bg-gray-100'], ['rounded-lg']);
    }
    if(view==='grid'){
      card.current.classList.add(['py-2'], ['hover:-translate-y-2'], ['duration-100'], ['cursor-pointer']);
      image.current.classList.add(['bg-gray-100'], ['rounded-lg']);
    }
  }, [view])

  const setPokemonData = () => {
    dispatch(setPokemon(data.data));
    redirect('/pokemon/bulbasaur');
  }
  
  const [type, setType] = useState(data.data.types);
  return (
    <Link className='py-2 hover:-translate-y-2 duration-100 cursor-pointer' key={key} ref={card} onClick={() => setPokemonData()} href={redirectUrl}>
        <Image ref={image} className='bg-gray-100 rounded-lg' src={data.data.sprites.other['official-artwork']['front_default']} height={215} width={215} alt={data.data.name}/>
        <div ref={nameType}>
          <div>
            <p className='px-2 text-gray-400 text-xs'>#{stringify(data.data.id)}</p>
            <p className='px-2 text-lg md:text-2xl my-3 capitalize'>{data.data.name}</p>
          </div>
          <div className='flex gap-1 md:gap-2 flex-wrap'>
            {type.map(ty => (
              <TypeBricks type={ty.type.name} />
            ))}
          </div>
        </div>
    </Link>
  )
}

export default Cards