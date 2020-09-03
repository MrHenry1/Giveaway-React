import React, {useState} from 'react';

import { Container, Header, GiveawayBtn } from './styles/mainStyle.js'

import WinnerModal from './components/WinnerModal/index.jsx'
import ShowParticipants from './components/Participants/index.jsx'
import Card from './components/Card/index.jsx'
import FormParticipants from './components/FormParticipants/index.jsx'

import useGive from './Hooks/useGive.js'

const App = () => {
  
  const [participants, setParticipants] = useState([])
  const [person, setPerson] = useState('')
  const [winner, setWinner] = useState(null)
  
  const giveaway = () => {
    if(participants.length <= 1) {
      return alert('Few Participants')
    }
    
    const participantWinner = useGive(participants)
    setWinner(participantWinner)
  }
  
  return (
    <Container>
    
      <Header>
        <h1>GivesMe</h1>
      </Header>
  
      <FormParticipants use={{myParticipants: {participants, state: setParticipants}, myPersons: {person, state: setPerson} }} />
      
      <ShowParticipants use={{ref: participants, state: setParticipants}} />
      
      <GiveawayBtn onClick={giveaway}>Giveaway</GiveawayBtn>
      
      {winner && <WinnerModal win={winner} disable={setWinner} />}
    </Container>
  )
}

export default App