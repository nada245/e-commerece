import React, { useState } from 'react'
import usaFlag from '../Assests/usk.png'
import ukFlag from '../Assests/uk.png'
import egFlag from '../Assests/EGYPT.png'
import { Dropdown } from 'react-bootstrap';
import { FaMobileAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { SlLogin } from "react-icons/sl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import '../css/Navbar.css'
const Navbar = () => {
    const [selectedOption, setSelectedOption] = useState({ label: "USK", flag: usaFlag });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [selectedOption1, setSelectedOption1] = useState({ label: "EUR" })
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false)
    const handelDropDownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }
    const handelOptionSelect = (label, flag) => {
        setSelectedOption({ label, flag });
        setIsDropdownOpen(false)
    }
    const handelOptionSelect1 = (label) => {
        setSelectedOption1({ label })
        setIsDropdownOpen1(false)
    }
    const handelDropDownToggle1 = () => {
        setIsDropdownOpen1(!isDropdownOpen1)
    }
    return (
        <>

            <div style={{ display: 'flex', justifyContent: 'space-between', background: '#ece9ee', color: 'black', padding: "15px", height: "2rem" }}>
                {/* left side */}
                <div>
                    <div className='part1'>
                        <Dropdown className='dropdown' show={isDropdownOpen} onClick={handelDropDownToggle}>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                {selectedOption.flag && <img src={selectedOption.flag} alt={selectedOption.label} className="logo" />} {selectedOption.label}
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='dropdownMenu'>
                                <Dropdown.Item onClick={() => handelOptionSelect('UK', ukFlag)}> <img src={ukFlag} alt="UK" className="logo1" /> UK</Dropdown.Item>
                                <Dropdown.Item onClick={() => handelOptionSelect('USK', usaFlag)}> <img src={usaFlag} alt="USK" className="logo2" /> USK</Dropdown.Item>
                                <Dropdown.Item onClick={() => handelOptionSelect('EGYPT', egFlag)}>  <img src={egFlag} alt="EGYPT" className="logo3" /> EGYPT</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className='part22'>
                        <Dropdown show={isDropdownOpen1} onToggle={handelDropDownToggle1}>
                            <Dropdown.Toggle variant="primary">
                                {selectedOption1.label && selectedOption1.label}
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='dropdownMenu'>
                                <Dropdown.Item onClick={() => handelOptionSelect1('EUR')}>
                                    EUR
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => handelOptionSelect1('USD')}>
                                    USD
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => handelOptionSelect1(' GRB')}>
                                    GRB
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className='part3'>
                        <div className='mobile'>
                            <FaMobileAlt />
                            <p>125-785-463</p>

                        </div>

                    </div>
                </div>

                {/* right side */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", left: "-4%" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "30px" }}>
                        <FontAwesomeIcon icon={faExchangeAlt} />
                        <div style={{ position: 'relative', right: "-20px", top: "-0.4rem" }}>
                            <a style={{ textDecoration: "none", color: "black" }} href='/'>Compare</a>
                        </div>
                    </div>


                    <div style={{ display: "flex", justifyContent: "space-around", padding: "30px", margin: "-10%" }}>
                        <FaRegHeart />
                        <div style={{ position: 'relative', right: "-18px", top: "-0.4rem" }}>
                            <a style={{ textDecoration: "none", color: "black" }} href='/'>Love</a>
                        </div>
                    </div>


                    <div style={{ display: "flex", justifyContent: "space-between", padding: "30px" }}>
                        <SlLogin />
                        <div style={{ position: 'relative', right: "-18px", top: "-0.4rem" }}>
                            <a style={{ textDecoration: "none", color: "black" }} href='/'>Login</a>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </>
    )
}

export default Navbar