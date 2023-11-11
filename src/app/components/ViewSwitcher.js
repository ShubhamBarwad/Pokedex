import React, { useEffect, useRef } from 'react';
import { setView } from '@/feature/pokemonList/viewSwitcherSlice';
import { useDispatch } from 'react-redux';

function ViewSwitcher( {view} ) {
    console.log(view)
    const dispatch = useDispatch();
    const gridView = useRef();
    const listView = useRef();
    const toggleView = (view) => {
        dispatch(setView(view));
    }
    useEffect(() => {
      view === 'grid'? gridView.current.classList.add(['bg-gray-200']) : gridView.current.classList.remove(['bg-gray-200']);
      view === 'list'? listView.current.classList.add(['bg-gray-200']) : listView.current.classList.remove(['bg-gray-200']);
    }, [view])
    
  return (
    <>
        <div className='flex border rounded-md w-min items-center justify-center h-min xl:hidden'>
            <div className='flex items-center cursor-pointer' onClick={()=>toggleView('grid')} ref={gridView}>
                <span className="material-symbols-outlined scale-125 pr-3 my-2 ml-2 text-sm md:text-base">
                    grid_view
                </span>
            </div>
            <div className='flex items-center cursor-pointer' onClick={()=>toggleView('list')} ref={listView}>
                <span className="material-symbols-outlined scale-125 pl-3 my-2 mr-2 text-sm md:text-base">
                    view_list
                </span>
            </div>
        </div>
    </>
  )
}

export default ViewSwitcher