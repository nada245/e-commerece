import React from 'react';
import { BsStar, BsStarFill } from "react-icons/bs";

const RateStars = ({ rating }) => { 
    const filledStars = Math.floor(rating);
    const partFilledStarWidth = (rating - filledStars) * 100;
    return (
        <div className='rating'>
            {[...Array(5)].map((_, index) => ( 
                <div className='star' key={index}>
                    <div
                        className='starFull'
                        style={{ width: index + 1 <= filledStars || partFilledStarWidth >= 100 ? "100%" : `${partFilledStarWidth}%` }}
                    >
                        <BsStarFill />
                    </div>
                    <div className='starEmpty'>
                        <BsStar />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RateStars;
