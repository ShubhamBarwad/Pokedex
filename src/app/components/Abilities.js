import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

function Abilities({ability}) {
    const abilitiesSpan = useRef();
    const tooltipdiv = useRef();
    const [tooltip, setTooltip] = useState(false);
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    
    useEffect(() => {
      if(ability['is_hidden']){
          abilitiesSpan.current.classList.add('underline', 'cursor-pointer');
          setTooltip(true);
      }
    }, []);

    const toggleTooltip = (toggle) => {
        if(toggle){
            setIsTooltipVisible(toggle);
        }else{
            setTimeout(() => {
                setIsTooltipVisible(toggle);
            }, 300);
        }
    }
    

  return (
    <>
        <span onMouseEnter={() => toggleTooltip(true)} onMouseLeave={() => toggleTooltip(false)} className='mt-2 text-blue-950 block capitalize font-medium text-sm md:text-base' ref={abilitiesSpan}>{ability.ability.name}</span>
        {(tooltip && isTooltipVisible) && <div ref={tooltipdiv} className='absolute bg-blue-950 -right-5 -bottom-1 text-sm p-2 rounded-md shadow-md'>Hidden Ability</div>}
    </>
  )
}

export default Abilities