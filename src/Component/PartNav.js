import React from 'react'
import '../css/PartNav.css'
import logo from '../Assests/shoop.jpg'
import Part2 from './Part2';
import { LuShoppingCart } from "react-icons/lu";
const PartNav = () => {

    return (
        <>
            <div style={{ display: "flex",background:"#a0a1a315",position:"relative",width:"100%",height:"20%" }}>
                <div style={{ position: "relative" }}>
                    
                        <img style={{ width: "5%", borderRadius: "80px",position:"relative",bottom:"-6%",right:"-12px" }} src={logo} alt='/' />
            
                    <div className='shopping'>
                        <p>SHOPPING</p>
                    </div>
                </div>
                <div className='part2'>
                    <Part2 />
                </div>
                {/* <div className='logo'>
                <LuShoppingCart className='icon' />
                </div> */}
                    
                
            </div>

        </>
    )
}

export default PartNav


