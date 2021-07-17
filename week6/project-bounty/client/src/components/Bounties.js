import React from "react";
import { useState } from "react";
import BountyHandler from "./BountyHandler";


export default function Bounties({ deleteBounty, editBounties, name, gang, price, _id }){
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div id="cntnr1">
            { !editToggle ?
                <>
                    <h2>Name: {name}</h2>
                    <p>Gang: {gang}</p>
                    <p>Reward: ${price}</p>
                    <button onClick={() => deleteBounty(_id)} id="dltBtn">Delete</button>
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)} id="editBtn">Edit</button>
                </>
                :
                <>
                    <BountyHandler  name={name}  gang={gang}  _id={_id}  btnText="Submit Edit"  submit={editBounties} />
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)} id="closeBtn">Close</button>
                </>
            }
        </div>
    )
}