import React from 'react'

function RandomizeBtn() {
    const randomizeResults = () => {
        console.log('This Function will randomize results!!!'); 
    }
  return (
    <div className='w-full py-5 flex justify-start'>
        <button onClick={randomizeResults()} className='bg-slate-900 text-white text-xs md:text-sm md:px-20 px-10 py-3 rounded-md flex gap-2 items-center'>
            <span className="material-symbols-outlined">
                autorenew
            </span>
            Surprise Me!
        </button>
    </div>
  )
}

export default RandomizeBtn