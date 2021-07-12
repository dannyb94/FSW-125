import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Bounties from './components/Bounties';
import BountyHandler from './components/BountyHandler';
//import Kills from './components/Kills'


function App() {
  const [bounties, setBounties] = useState([]);
  //const [kills, setKills] = useState([]);

  const getBounties = () => {
    axios.get('/open-bounties')
      .then(res => setBounties(res.data))
      .catch(err => console.log(err))
  }

  const addBounty = (newBounty) => {
    axios.post('/open-bounties', newBounty)
      .then(res => {
        setBounties(prevBounties => [...prevBounties, res.data])
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getBounties();
  }, [])

  const deleteBounty = (bountyId) => {
    axios.delete(`/open-bounties/${bountyId}`)
      .then(res => {
        setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
      })
      .catch(err => console.log(err))
  }

  const editBounties = (updates, bountyId) => {
    axios.put(`/open-bounties/${bountyId}`, updates)
      .then(res => {
        setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
      })
      .catch(err => console.log(err))
  }

  // useEffect(() => {
  //   axios.get('/my-kills')
  //     .then(res => setKills(res.data))
  //     .catch(err => console.log(err))
  // }, [])

  const bountyList = bounties.map(bounty => <Bounties {...bounty}  deleteBounty={deleteBounty}  editBounties={editBounties}  key={bounty.name} />)
  //const killList =  kills.map(killed => <Kills {...killed} key={killed.name} />)

  return (
    <div className='bounties'>
      <BountyHandler  btnText='Add Bounty' submit= {addBounty} />
      {bountyList}
    </div>
  );
}

export default App;


/*
X •Build a client-side React interface for the server you created!

Your app should be a CRUD application - it should be able to: 
X  -Create (POST) new bounties
X  -Read (GET) existing bounties and show them to the user of your site
  -Update (PUT) existing bounties (e.g. if you wanted to up the price for a bounty)
X  -Delete (DELETE) bounties from the list of all bounties.
*/
