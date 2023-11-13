'use client'
import React, { useEffect, useState } from 'react';
import RandomizeBtn from './RandomizeBtn';
import ListContainer from './ListContainer';
import { useDispatch, useSelector } from 'react-redux';
import ViewSwitcher from './ViewSwitcher';

function Container() {
  const view = useSelector(state => state.view);
  return (
    <div className='w-full min-h-screen pt-20 px-2 md:px-20 lg:px-40 xl:56'>
        <div className='flex justify-between items-center '>
          <RandomizeBtn/>
          <ViewSwitcher view={view.view}/>
        </div>
        <ListContainer/>
    </div>
  )
}

export default Container