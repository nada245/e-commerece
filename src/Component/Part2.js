import React from 'react'
import { useState, useMemo } from 'react';
import { DropDownList } from "@progress/kendo-react-dropdowns";
const categories = ["All", "Men'clothes", "Women'clothes", "kids'clothes"]
const data = [
    {
        id: 1,
        label: "there are many clothres that we hope liked this",
        type: "Kid'sclothes",
    },
    {
        id: 2,
        label: "there are many clothres contain {women,men,kids}",
        type: "All",
    },
    {
        id: 3,
        label: "there are many collection of woman'clothes ",
        type: "Women'clothes",
    },
    
]
const Part2 = () => {
    // const [selectedOption, setSelectedOption] = useState('');
    // const handleChange = (event) => {
    //     setSelectedOption(event.target.value);
    //}
    const [category, setCategory] = useState('');
    const filterData = useMemo(
        () => {
            if (!category || category === "All")
                return data;
            return data.filter(item => item.type === category);
        }
        , [category]);
    return (
        // <div>
        //     <select value={selectedOption} onChange={handleChange}>
        //         <option value="">Select an option</option>
        //         <option value="option1">Option 1</option>
        //         <option value="option2">Option 2</option>
        //         <option value="option3">Option 3</option>
        //     </select>
        //     <p>Selected option: {selectedOption}</p>
        // </div>

        <section className="k-my-8">
            <form className="k-form k-mb-4">
                <label className="k-label k-mb-3" style={{fontSize:"20px",fontWeight:"blod"}}>HERE YOU CAN TAKE YOU NEED</label>
                <DropDownList data={categories} onChange={e => setCategory(e.value)} />
            </form>

            <section className="k-listgroup">
                <ul>
                    {filterData.map(item => {
                        return (
                            <li key={item.id} className="k-listgroup-item">
                                {item.label}
                            </li>
                        );
                    })}
                </ul>
            </section>
        </section>
    )
}

export default Part2