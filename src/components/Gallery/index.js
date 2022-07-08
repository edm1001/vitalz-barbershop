import React from 'react';
//import the background picture
import haircut from '../../assets/haircuts/placeholder.png';
import background from '../../assets/cover/cover-image.png';

function Gallery() {
    return (
        <section className='gallery' id='gallery'
        >
        

        <section className='client-pic' id='client-pic'>
        <h1>Client Gallery</h1>
        <div className='haircuts' id='haircuts' style={{backgroundImage:`url(${background})`}}>
        <div id="placeholder" >
        <img src={haircut} alt="haircut"/>
        </div>
        <img id='placeholder' src={haircut} alt="haircut"/>
        <img classname="placeholder" src={haircut} alt="haircut"/>
        <img classname="placeholder" src={haircut} alt="haircut"/>
        <img classname="placeholder" src={haircut} alt="haircut"/>
        <img classname="placeholder" src={haircut} alt="haircut"/>
        </div>
        </section>
    </section>

    )
}
export default Gallery;