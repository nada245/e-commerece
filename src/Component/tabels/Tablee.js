
import React from 'react';
import '../tabels/Tablee.css';
import { FaCar } from "react-icons/fa6";
import { TfiMoney } from "react-icons/tfi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlinePayments } from "react-icons/md";

const Tablee = () => {
    return (
        <div className='pTable'>
            <table className="table">
                <tbody> 
                    <tr>
                        <td style={{ color: "black", width: "25%" }}>
                            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                                <div style={{ position: "relative", top: "10px", fontSize: "30px", left: "-5%", padding: "4px" }}>
                                    <FaCar />
                                </div>
                                <div>
                                    <h4>Free Delivery</h4>
                                    <p style={{ color: "gray" }}>Worldwide</p>
                                </div>
                            </div>
                        </td>
                        <td style={{ color: "black", width: "25%" }}>
                            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                                <div style={{ position: "relative", top: "10px", fontSize: "30px", left: "-5%", padding: "4px" }}>
                                    <TfiMoney />
                                </div>
                                <div>
                                    <h4>Money Returns</h4>
                                    <p style={{ color: "gray" }}>30 Days money return</p>
                                </div>
                            </div>
                        </td>
                        <td style={{ color: "black", width: "25%" }}>
                            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                                <div style={{ position: "relative", top: "10px", fontSize: "30px", left: "-5%", padding: "4px" }}>
                                    <RiCustomerService2Fill />
                                </div>
                                <div>
                                    <h4>27/4 Online Support</h4>
                                    <p style={{ color: "gray" }}>Customer Support</p>
                                </div>
                            </div>
                        </td>
                        <td style={{ color: "black" }}>
                            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                                <div style={{ position: "relative", top: "10px", fontSize: "30px", left: "-5%", padding: "4px" }}>
                                    <MdOutlinePayments />
                                </div>
                                <div>
                                    <h4>Payment Security</h4>
                                    <p style={{ color: "gray" }}>Safe Payment</p>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Tablee;
