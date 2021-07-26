import React from 'react';
import { useState } from 'react';
import MovieHandler from './AnimeHandler';

export default function Movies({deleteMovies, editMovies, name, genre, rent, info, _id}){
    const [editToggle, setEditToggle] = useState(false)

    return(
        <div>
            {!editToggle ?
                <>
                    <h2 className='title'>Name: {name}</h2>
                    <p className='genre'>Genre: {genre}</p>
                    <p className='rent'>Rent: {rent}</p>
                    <p className='info'>More Info: {info}</p>
                    <button onClick={() => deleteMovies(_id)} className='dltBtn'>Delete</button>
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)} className='editBtn'>Edit</button>
                </>
                :
                <>
                    <MovieHandler name={name} genre={genre} rent={rent} info={info} _id={_id} btnText="Confirm Edit" submit={editMovies} />
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)} className='closeBtn'>Close</button>
                </>
            }
        </div>
    )
}