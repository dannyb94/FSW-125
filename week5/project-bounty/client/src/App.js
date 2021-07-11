import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Bounties from './components/Bounties';


function App() {
  const [bounties, setBounties] = useState([]);

  useEffect(() => {
    axios.get('/open-bounties')
      .then(res => setBounties(res.data))
      .catch(err => console.log(err))
  }, [])

  const bountyList = bounties.map(bounty => <Bounties {...bounty} key={bounty.name} />)

  return (
    <div className='bounties'>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
