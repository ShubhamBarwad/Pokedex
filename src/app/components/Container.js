import React from 'react';
import RandomizeBtn from './RandomizeBtn';
import ListContainer from './ListContainer';

function Container() {
  return (
    <div className='w-full h-screen pt-20 px-2 md:px-20 lg:px-40 xl:56'>
        <RandomizeBtn/>
        <ListContainer/>
    </div>
  )
}

export default Container