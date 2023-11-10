import React from 'react'

function Loader() {
  return (
    <div className="wrapper fixed w-screen h-screen top-0 left-0 bg-white flex items-center justify-center z-50">
        <div className="pokeball w-16 h-16 bg-white rounded-full relative overflow-hidden border-4 after:absolute border-gray-900 animate-spin
                after:w-16 after:h-8 after:bg-red-600 after:border-b-4 after:border-gray-900 after:-top-[2px]
                before:absolute before:bg-white before:w-5 before:h-5 before:border-4 before:rounded-full before:bottom-[17px] before:right-[18px] before:z-10 before:border-gray-900">
        </div>
    </div>
  )
}

export default Loader