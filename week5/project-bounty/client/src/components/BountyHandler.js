//import React from "react";
import { useState } from 'react';

export default function BountyHandler({btnText, submit, name, gang, _id}){
    const initialInputs = {name: name || '', gang: gang || ''}
    const [inputs, setInputs] = useState(initialInputs);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(inputs, _id);
        setInputs(initialInputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"  name="name"  value={inputs.name}  onChange={handleChange}  placeholder="Bounty Name"/>
            <input type="text"  name="gang"  value={inputs.gang}  onChange={handleChange}  placeholder="The Gang"/>
            <input type="number"  name="price"  value={inputs.price}  onChange={handleChange}  placeholder="Price"/>
            <input type="text"  name="lastSeen"  value={inputs.lastSeen}  onChange={handleChange}  placeholder="Last Seen"/>
            <span>
                <label>Living</label>
                <select name="livingConfirm"  onChange={handleChange}>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
            </span>
            <br></br>
            <button id="postSub">{btnText}</button>
        </form>
    )
}