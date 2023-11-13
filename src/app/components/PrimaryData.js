import React, { useEffect, useState } from 'react'
import ImageSlider from './ImageSlider'
import TypeBricks from './TypeBricks'
import Abilities from './Abilities';

function PrimaryData({image, name, imageSet, type, data, abilities}) {
    console.log(data);
  return (
    <div className='rounded-lg p-2 md:p-5 shadow-lg flex flex-col md:flex-row items-start text-white gap-3 justify-evenly'>
        <div className='flex flex-col items-center gap-5 w-full md:w-3/6'>
            <ImageSlider imageSet={imageSet} />
            {type && <div className='flex gap-1 md:gap-2 flex-wrap'>
                {type.map((ty, i) => (
                    <TypeBricks type={ty.type.name} key={`type_${ty.type.name}`}/>
                ))}
            </div>}
        </div>
        <div className='w-full md:max-w-md'>
            <div className='w-full bg-cyan-500 px-4 md:px-10 py-5 rounded-md text-xl md:max-w-md'>
                <div className='grid grid-cols-2 grid-rows-2 gap-5 flex-wrap'>
                    <p className='font-semibold text-sm sm:text-base'>Height<span className='mt-2 text-blue-950 block font-medium text-sm md:text-base'>{data.height/10} m</span></p>
                    <p className='font-semibold text-sm sm:text-base'>Weight<span className='mt-2 text-blue-950 block font-medium text-sm md:text-base'>{data.weight/10} kg</span></p>
                    <div className='relative'>
                        <p className='font-semibold text-sm sm:text-base'>Abilities</p>
                            {abilities && abilities.map(ability => (
                                <Abilities key={ability.ability.name} ability={ability}/>
                            ))}
                    </div>
                    <p className='font-semibold text-sm sm:text-base'>NationalDex No.<span className='mt-2 text-blue-950 block font-medium text-sm md:text-base'>{data.id}</span></p>
                </div>
            </div>
            <div>
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default PrimaryData