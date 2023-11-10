import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import abomasnow from '../resources/Abomasnow_small.png'
import TypeBricks from './TypeBricks';

function Cards({key, data, stringify}) {
  // debugger;
  const [type, setType] = useState(data.data.types);
  return (
    <a className='py-2 hover:-translate-y-2 duration-100' key={key} href="#">
        <Image className='bg-gray-100 rounded-lg' src={data.data.sprites.other['official-artwork']['front_default']} height={215} width={215} alt={data.data.name}/>
        <p className='px-2 text-gray-400 text-xs'>#{stringify(data.data.id)}</p>
        <p className='px-2 text-2xl my-3 capitalize'>{data.data.name}</p>
        <div className='flex gap-2'>
          {type.map(ty => (
            <TypeBricks type={ty.type.name}/>
          ))}
        </div>
    </a>
  )
}

export default Cards