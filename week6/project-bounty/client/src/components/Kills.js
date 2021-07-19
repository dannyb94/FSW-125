import React, { useState } from "react";
import KillsHandler from "./KillsHandler"


export default function Kills({ deleteKill, editKills, name, gang, price, _id}){
    const [switchUp, setSwitchUp] = useState(false)

    return (
        <div id="cntnr2">
            { !switchUp ?
                <>
                    <h2>Name: {name}</h2>
                    <p>Gang: {gang}</p>
                    <p>Reward: ${price}</p>
                    <button onClick={() => deleteKill(_id)} id="dltBtn">Delete</button>
                    <button onClick={() => setSwitchUp(prevToggle => !prevToggle)} id="editBtn">Edit</button>
                </>
                :
                <>
                    <KillsHandler  name={name}  gang={gang}  _id={_id}  btnText="Submit Edit"  submit={editKills} />
                    <button onClick={() => setSwitchUp(prevToggle => !prevToggle)} id="closeBtn">Close</button>
                </>
            }
        </div>
    )
}

/*
<h2>Name: {name}</h2>
            <p>Gang: {gang}</p>
            <p>Payout: ${price}</p>
            <button onClick={() => deleteKill(_id)} id="dltBtn">Delete</button>
*/