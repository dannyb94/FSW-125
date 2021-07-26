import React from 'react';
import { useState } from 'react';
import CartoonHandler from './AnimeHandler';

export default function Cartoons({deleteCartoons, editCartoons, name, genre, rent, info, _id}){
    const [editToggle, setEditToggle] = useState(false)

    return(
        <div>
            {!editToggle ?
                <>
                    <h2 className='title'>Name: {name}</h2>
                    <p className='genre'>Genre: {genre}</p>
                    <p className='rent'>Rent: {rent}</p>
                    <p className='info'>More Info: {info}</p>
                    <button onClick={() => deleteCartoons(_id)} className='dltBtn'>Delete</button>
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)} className='editBtn'>Edit</button>
                </>
                :
                <>
                    <CartoonHandler name={name} genre={genre} rent={rent} info={info} _id={_id} btnText="Confirm Edit" submit={editCartoons} />
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)} className='closeBtn'>Close</button>
                </>
            }
        </div>
    )
}