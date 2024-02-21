import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../sliderr/Slider.css'
import sofa1 from '../sliderr/41eOmsLsfSL._AC_.jpg'
import sofa2 from '../sliderr/5151xdopdjL._AC_SX679_.jpg'
import sofa3 from '../sliderr/51k4rZhxS7L._AC_SX679_.jpg'
const Sliderr = () => {
    const prop = {
        // dots: true,
        Infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <div className='slider'>
            <Slider className='slider2' {...prop}>
                <div className='flex'>

                    <div>
                        <p style={{fontWeight:'bold',fontSize:"40px"}}>New Tranding</p>
                        <h1 style={{fontWeight:'bold',fontSize:"70px"}}>Sofa Collection</h1>

                        <button className='animateButton' style={{borderRadius:"30px"}}>SHOP NOW</button>
                    </div>
                    <div>   <img src={sofa1} className='img' alt='/' /></div>
                </div>
                <div className='flex'>

<div>
<p style={{fontWeight:'bold',fontSize:"40px"}}>Get up to 50% off Today Only!</p>
                        <h1 style={{fontWeight:'bold',fontSize:"70px"}}>Wooden Chair Collection</h1>
                        
                        <button className='animateButton' style={{borderRadius:"30px"}}>SHOP NOW</button>
</div>
<div>   <img src={sofa2} className='img' alt='/' /></div>
</div>

<div className='flex'>

<div>
<p style={{fontWeight:'bold',fontSize:"40px"}}>Living Room Collection</p>
                        <h1 style={{fontWeight:'bold',fontSize:"70px"}}>Taking your Viewing Experience<br/> to Next Level</h1>
                        
                        <button style={{position:"relative",top:"-15%",borderRadius:"30px"}} className='animateButton'>SHOP NOW</button>
</div>
<div>   <img src={sofa3} className='img' alt='/' /></div>
</div>
            </Slider>
        </div>
    )
}

export default Sliderr