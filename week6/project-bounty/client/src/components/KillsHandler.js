import { useState } from 'react'

export default function KillsHandler({btnTexts, submits, name, gang, _id}){
    const initialOutputs = {name: name || '', gang: gang || ''}
    const [outputs, setOutputs] = useState(initialOutputs);

    const handleChanges = (e) => {
        const {name, value} = e.target;
        setOutputs(prevOutputs => ({...prevOutputs, [name]: value}))
    }

    const handleSubmits = (e) => {
        e.preventDefault();
        submits(outputs, _id);
        setOutputs(initialOutputs);
    }

    return (
        <form onSubmit={handleSubmits}>
            <span id='aligned'>
                <input type="text"  name="name"  value={outputs.name}  className='switchUp'  onChange={handleChanges}  placeholder="Killed Name"/>
                <input type="text"  name="gang"  value={outputs.gang}  className='switchUp'  onChange={handleChanges}  placeholder="The Gang"/>
                <input type="number"  name="price"  value={outputs.price}  className='switchUp'  onChange={handleChanges}  placeholder="Payout"/>
                <span id='wrapper2'>
                    <label>Killed</label>
                    <select name="livingConfirm" id='dropDown2'  onChange={handleChanges}>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </span>
            </span>
            <br></br>
            <button id="postSubs">{btnTexts}</button>
        </form>
    )
}