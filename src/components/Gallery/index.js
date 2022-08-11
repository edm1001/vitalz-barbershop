import React from 'react';
import { sliderData } from './sliderData';

const Gallery = () => {
    return (
        <section className='gallery' id='gallery'
        >
        <div className='client-pic' id='client-pic'>
        <h1>
        Gallery</h1>
        
        <div className='haircuts' id='haircuts' style={{backgroundImage:`url($
            {background})`}}>
        <div id="placeholder" >
        {sliderData.map((slide, index)=> {
            return <img src={slide.image} alt='haircuts' />
        })}
        
        </div>
        </div>
        </div>
    </section>

    )
}
export default Gallery;