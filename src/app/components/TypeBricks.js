import React from 'react'

export default function TypeBricks({type}) {
  const types = [
    {
      name: 'bug',
      background: 'bg-bug',
      text: 'text-white'
    },
    {
      name: 'dragon',
      background: 'bg-dragon',
      text: 'text-white'
    },
    {
      name: 'fairy',
      background: 'bg-fairy',
      text: 'text-black'
    },
    {
      name: 'fire',
      background: 'bg-fire',
      text: 'text-white'
    },
    {
      name: 'ghost',
      background: 'bg-ghost',
      text: 'text-white'
    },
    {
      name: 'ground',
      background: 'bg-ground',
      text: 'text-black'
    },
    {
      name: 'normal',
      background: 'bg-normal',
      text: 'text-black'
    },
    {
      name: 'psychic',
      background: 'bg-psychic',
      text: 'text-white'
    },
    {
      name: 'steel',
      background: 'bg-steel',
      text: 'text-black'
    },
    {
      name: 'dark',
      background: 'bg-dark',
      text: 'text-white'
    },
    {
      name: 'electric',
      background: 'bg-electric',
      text: 'text-black'
    },
    {
      name: 'fighting',
      background: 'bg-fighting',
      text: 'text-white'
    },
    {
      name: 'flying',
      background: 'bg-flying',
      text: 'text-black'
    },
    {
      name: 'grass',
      background: 'bg-grass',
      text: 'text-black'
    },
    {
      name: 'ice',
      background: 'bg-ice',
      text: 'text-black'
    },
    {
      name: 'poison',
      background: 'bg-poison',
      text: 'text-white'
    },
    {
      name: 'rock',
      background: 'bg-rock',
      text: 'text-white'
    },
    {
      name: 'water',
      background: 'bg-water',
      text: 'text-white'
    },
  ]
  const matchTypes = (typ) => {
    return typ.name.toLowerCase() === type.toLowerCase();
  }
  const currentType = types.find(matchTypes);

  return (
    <div className={`md:w-24 py-1 w-16 text-xs md:text-base rounded-md text-center uppercase ${currentType.background} ${currentType.text}`} >{currentType.name}</div>
  )
}
