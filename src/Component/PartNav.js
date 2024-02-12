import React from 'react'
import '../css/PartNav.css'
import logo from '../Assests/shoop.jpg'
import Part2 from './Part2';
import { LuShoppingCart } from "react-icons/lu";
const PartNav = () => {

    return (
        <>
            <div style={{ display: "flex",background:"#a0a1a315",position:"fixed",width:"100%",height:"50%" }}>
                <div style={{ position: "relative", display: "flex" }}>
                    <a href='/'>
                        <img style={{ width: "5%", borderRadius: "80px", marginRight: "20rem" }} src={logo} alt='/' />
                    </a>
                    <div style={{ position: "relative", left: "-78rem", top: "35px" }}>
                        <p style={{ fontWeight: "bold", fontSize: "2rem", position: "fixed", top: "47px",left:"5%",color:"black" }}>SHOPPING</p>
                    </div>
                </div>
                <div className='part2'>
                    <Part2 />
                </div>
                <div className='circle-icon'>
                    <LuShoppingCart className='icon' />
                    <span class="item-count">5</span>
                </div>
            </div>

        </>
    )
}

export default PartNav