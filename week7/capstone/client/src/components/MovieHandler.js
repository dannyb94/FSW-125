import { useState } from "react";

export default function MovieHandler({btnText, submit, name, genre, rent, info, _id}){
    const initialInputs = {name: name || '', genre: genre || '', rent: rent || '', info: info || ''}
    const [inputs, setInputs] = useState(initialInputs)

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        submit(inputs, _id)
        setInputs(initialInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
                <span className='inputWrap'>
                    <input type='text' name='name' value={inputs.name} className='input' onChange={handleChange} placeholder='Name of Listing' />

                    <input type='text' name='genre' value={inputs.genre} className='input' onChange={handleChange} placeholder='Genre' />

                    <input type='number' name='rent' value={inputs.rent} className='input' onChange={handleChange} placeholder='Rent Price' />

                    <input type='text' name='info' value={inputs.info} className='input' onChange={handleChange} placeholder='More Info' />
                </span>

                <button className="submit">{btnText}</button>
            </form>
    )
}