import React from 'react'

function NameComponent({name}) {
  return (
    <p className='capitalize text-2xl md:text-3xl my-5'>{name}</p>
  )
}

export default NameComponent