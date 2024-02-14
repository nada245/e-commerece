// import React from 'react'
// import '../css/Tablee.css'
// import { FaCar } from "react-icons/fa6";
// import { TfiMoney } from "react-icons/tfi";
// import { RiCustomerService2Fill } from "react-icons/ri";
// const Tablee = () => {
//     return (
//         <div className='pTable'>
//             <table className="table">
//                 <tr>
//                     <div style={{display:"flex",justifyContent:"space-evenly"}}>
//                     <th style={{color:"black",width:"25%",display:"flex",justifyContent:"space-evenly"}}> 
//                         <div style={{position:"relative",top:"40%",left:"-5%",padding:"4px"}} >
// <FaCar/>
//                         </div>
//                         <div style={{position:"relative",right:"-20px"}}>
//                             <h4>Free Delivery</h4>
//                             <p style={{color:"gray"}}>Worldwide</p>
//                         </div>
//                     </th>
//                     <th style={{display:"flex",width:"25%",justifyContent:"space-evenly",color:"black"}}>
//                         <div style={{position:"relative",top:"40%",left:"-5%",padding:"4px"}}>
// <TfiMoney/>
//                         </div>
//                         <div>
//                         <h4>Free Delivery</h4>
//                             <p style={{color:"gray"}}>Worldwide</p>
//                         </div>
//                     </th>
//                     </div>

// <br/>
//                     <div style={{display:"flex",justifyContent:"space-evenly"}}>
//                     <th style={{color:"black",width:"25%"}}>
//                         <div style={{position:"relative",top:"40%",left:"-5%",padding:"4px"}}>
// <RiCustomerService2Fill/>
//                         </div>

//                         <div>
//                         <h4>Free Delivery</h4>
//                             <p style={{color:"gray"}}>Worldwide</p>
//                         </div>
//                         </div>
//                     </th>
//                     <th style={{color:"black"}}>Column 4</th>
//                     </div>

//                 </tr>
//             </table>
//         </div>
//     )
// }

// export default Tablee

import React from 'react';
import '../css/Tablee.css';
import { FaCar } from "react-icons/fa6";
import { TfiMoney } from "react-icons/tfi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlinePayments } from "react-icons/md";

const Tablee = () => {
    return (
        <div className='pTable'>
            <table className="table">
                <tbody> {/* Add tbody to contain table rows */}
                    <tr>
                        <td style={{ color: "black", width: "25%" }}>
                            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                                <div style={{ position: "relative", top: "35px",fontSize:"30px", left: "-5%", padding: "4px" }}>
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
                                <div style={{ position: "relative", top: "35px",fontSize:"30px", left: "-5%", padding: "4px" }}>
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
                                <div style={{ position: "relative", top: "35px", fontSize:"30px",left: "-5%", padding: "4px" }}>
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
                                <div style={{ position: "relative", top: "35px",fontSize:"30px", left: "-5%", padding: "4px" }}>
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
