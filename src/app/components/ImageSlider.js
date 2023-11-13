import Image from "next/image";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import React, { useEffect, useState } from 'react'
import DisplayImage from "./DisplayImage";

function ImageSlider({imageSet, nameSet}) {
    const [parentId, setParentId] = useState();
    const [slider, setSlider] = useState();
    const [sliderImage, setSliderImage] = useState();
    const [activeImage, setActiveImage] = useState();
    useEffect(() => {
        setParentId('imageSlider_'+Math.floor(Math.random()*10000));
    }, [])

    useEffect(() => {
        setSlider(document.getElementById(parentId));
        setSliderImage(document.querySelectorAll('.slider-images'));
    }, [parentId]);

    useEffect(() => {
        if(activeImage && sliderImage){
            displayActive(activeImage);
        }
    }, [activeImage]);

    useEffect(() => {
        if(!activeImage && sliderImage){
            setActiveImage(sliderImage[0]);
        }
    }, [sliderImage])

    const displayActive = (active) => {
        Array.from(sliderImage).forEach(element => element.classList.add('hidden'));
        active.classList.remove('hidden');
    }

    const handleClick = (string) => {
        const imageArray = Array.from(sliderImage);
        let activeIndex = (imageArray.indexOf(activeImage));
        const prev = activeIndex;
        if(string === 'prev'){
            if(activeIndex===0){
                activeIndex = imageArray.length-1;
            }else{
                activeIndex-=1;
            }
            if(prev !== activeIndex){
                setActiveImage(sliderImage[activeIndex]);
            }
        }else if(string === 'next'){
            if(activeIndex===(imageArray.length-1)){
                activeIndex = 0;
            }else{
                activeIndex+=1;
            }
            if(prev !== activeIndex){
                setActiveImage(sliderImage[activeIndex]);
            }
        }
    }

  return (
    <>
        <div id={parentId} className="flex items-center gap-2 justify-center">
            <ArrowBackIos className='text-gray-600 cursor-pointer' onClick={()=> handleClick('prev')}/>
            {imageSet.map((image, i) => (
                <DisplayImage key={i} id={`image_id_${i}`} image={image} name={image} setImage={setSliderImage}/>
            ))}
            <ArrowForwardIos className='text-gray-600 ml-[5px] cursor-pointer' onClick={() => handleClick('next')}/>
        </div>
    </>
  )
}

export default ImageSlider