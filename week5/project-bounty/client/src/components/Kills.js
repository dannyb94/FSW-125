import React from "react";


export default function Kills({ name, gang, _id}){

    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Gang: {gang}</p>
        </div>
    )
}