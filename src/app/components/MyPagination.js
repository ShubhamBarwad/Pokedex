import React from 'react'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'

function MyPagination({ next, setNext }) {
  return (
    <div className='w-full flex justify-center items-center gap-1'>
        <ArrowBackIos className='text-gray-600 cursor-pointer'/>
        <div className='h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center'>
            <p className='text-sm text-gray-500'>200</p>
        </div>
        <ArrowForwardIos className='text-gray-600 ml-[5px] cursor-pointer' onClick={setNext(next)}/>
    </div>
  )
}

export default MyPagination