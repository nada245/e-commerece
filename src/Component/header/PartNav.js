import React from 'react'
import '../header/PartNav.css'
import logo from '../header/shoop.jpg'

const PartNav = () => {

    return (
        <>
            <div style={{ display: "flex",background:"#a0a1a315",position:"relative",width:"100%",height:"9.4rem" }}>
                <div style={{ position: "relative" }}>
                    
                        <img style={{ width: "5%", borderRadius: "80px",position:"relative",bottom:"-6%",right:"-12px" }} src={logo} alt='/' />
            
                    <div className='shopping'>
                        <p>SHOPPING</p>
                    </div>
                </div>
                
                    
                
            </div>

        </>
    )
}

export default PartNav


