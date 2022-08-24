import React from 'react';
// import haircut01 from '../../assets/haircuts/haircut01.jpg';
import haircut02 from '../../assets/haircuts/haircut02.jpg';
import haircut03 from '../../assets/haircuts/haircut03.jpg';
import haircut04 from '../../assets/haircuts/haircut04.jpg';
import haircut05 from '../../assets/haircuts/haircut05.jpg';
// import haircut06 from '../../assets/haircuts/haircut06.jpg';
import haircut07 from '../../assets/haircuts/haircut07.jpg';
import haircut08 from '../../assets/haircuts/haircut08.jpg';
import haircut09 from '../../assets/haircuts/haircut09.jpg';

const Gallery = () => {
    return (
        <section className='gallery' id='gallery'
        > 
        <h1>Gallery</h1>
        
        <div className='client-gallery'>
        <figure className="gallery__item gallery__item--1">
        <img src={haircut09} alt='haircut' /> 
        </figure>
        <figure className='gallery__item gallery__item--2'>
        <img src={haircut02} alt='haircut' style={{width:'100%'}} /> 
        </figure>
        <figure className='gallery__item gallery__item--3'>
        <img src={haircut03} style={{width:'100%'}}alt='haircut'  /> 
        </figure>
        <figure className='gallery__item gallery__item--4'>
        <img src={haircut04} alt='haircut' 
        style={{width:'100%'}}
         /> 
        </figure>
        <figure className='gallery__item gallery__item--5'>
        <img src={haircut05} alt='haircut' 
        style={{width:'100%'}} /> 
        </figure>
        <figure className='gallery__item gallery__item--6'>
        <img src={haircut07} alt='haircut'  
        style={{width:'100%'}}/> 
        </figure>
        <figure className='gallery__item gallery__item--7'>
        <img src={haircut08} alt='haircut' 
        style={{width:'100%'}} /> 
        </figure>
        
        </div>
    </section>

    )
}

/* <div id="placeholder" >
        {sliderData.map((slide, index)=> {
            return <img src={slide.image} alt='haircuts' />
        })}
        
        </div> */
export default Gallery;