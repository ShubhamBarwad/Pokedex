import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Loader from './Loader';

function DisplayImage({id, image, name, setImage}) {
    useEffect(() => {
      setImage(document.querySelectorAll('.slider-images'));
    }, []);
    
  return (
    <div className='slider-images hidden transition-opacity duration-100' id={id}>
        {image && <Image className='bg-gray-100 rounded-lg w-full max-w-2xl' src={image} height={384} width={384} alt={name}/>}
        {!image && <Loader/>}
    </div>
  )
}

export default DisplayImage