import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Bounties from './components/Bounties';
import BountyHandler from './components/BountyHandler';
import Kills from './components/Kills';
import KillsHandler from './components/KillsHandler';
import { Switch, Route } from 'react-router-dom';


function App() {
  const [bounties, setBounties] = useState([]);
  const [kills, setKills] = useState([]);

  const getBounties = () => {
    axios.get('/open-bounties')
      .then(res => setBounties(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  }

  useEffect(() => {
    getBounties();
  }, [])

  const addBounty = (newBounty) => {
    axios.post('/open-bounties', newBounty)
      .then(res => {
        setBounties(prevBounties => [...prevBounties, res.data])
      })
      .catch(err => console.log(err))
  }

  const deleteBounty = (bountyId) => {
    axios.delete(`/open-bounties/${bountyId}`)
      .then(res => {
        setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  const editBounties = (updates, bountyId) => {
    axios.put(`/open-bounties/${bountyId}`, updates)
      .then(res => {
        setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
      })
      .catch(err => console.log(err))
  }

  //-------------------Kills----------------------------
  const getKills = () => {
    axios.get('/my-kills')
      .then(res => setKills(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getKills()
  }, [])

  const addKill = (newKill) => {
    axios.post('/my-kills', newKill)
      .then(res => {
        setKills(prevKill => [...prevKill, res.data])
      })
      .catch(err => console.log(err))
  }/**/

  const deleteKill = (killId) => {
    axios.delete(`/my-kills/${killId}`)
      .then(res => {
        setKills(prevKill => prevKill.filter(kill => kill._id !== killId))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  const editKills = (updated, killId) => {
    axios.put(`/my-kills/${killId}`, updated)
      .then(res => {
        setKills(prevKill => prevKill.map(kill => kill._id !== killId ? kill : res.data))
      })
      .catch(err => console.log(err))
  }

  //-----------------------------------------------
  const bountyList = bounties.map(bounty => <Bounties {...bounty}  deleteBounty={deleteBounty}  editBounties={editBounties}  key={bounty.name} />)

  const killList =  kills.map(killed => <Kills {...killed} key={killed.name}  deleteKill={deleteKill} editKills={editKills} />)

  return (
    <div className='bounties'>
      
      
      <Switch>
        <Route exact path = "/open-bounties" render = {() => <div>
          <BountyHandler  btnText='Add Bounty' submit= {addBounty} />
          {bountyList}</div>}/>
        <Route exact path = "/my-kills" render = {() => <div>
          <KillsHandler btnTexts='Add Kill' submit={addKill} />
          {killList}</div>}/>
      </Switch>
    </div>
  );
}

export default App;
