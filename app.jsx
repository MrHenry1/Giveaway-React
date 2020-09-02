import React, {useState, useEffect} from 'react';

import styles from './styles/Styles.js'
import Winner from './components/Winner.jsx'
import Card from './components/Card.jsx'
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
  
  const removePeople = (e) => {
    const refPeople = e.target.attributes.refpart.value
    
    const newParticipants = participants
    
    newParticipants.splice(refPeople, 1)
    
    setParticipants([...newParticipants])
  }
  
  const clearAll = () => {
    if (participants.length == 0) {
      return alert('No Participants')
    }
    
    setParticipants([])
  }
  
  const addParticipants = async (e) => {
    e.preventDefault()
    
    const everyPerson = person.split(',')
    
    let personWithoutTrim = []
    const personTrated = []
    
    everyPerson.forEach(item => {
      if(item && item != " ".repeat(item.length)) {
        personWithoutTrim.push(item.trim())
      }
    })
    
    for(let personInputed of personWithoutTrim) {
      if(participants.includes(personInputed)) {
        return alert(`${personInputed} Already Exists!`)
      } 
      
        const existsIn = personTrated.indexOf(personInputed)
        
        if(existsIn === -1) {
          personTrated.push(personInputed)
        }
      }
    
    if(participants.length <= 50 && participants.length + personTrated.length <= 50) {
      setParticipants([...participants, ...personTrated])
      setPerson('')
    }
    else {
      return alert('You reach the maximun')
    }
  }
  
  return (
    <div style={styles.container} id="container">
      <header style={styles.header}>
        <h1>GivesMe</h1>
      </header>
      
      <form style={styles.form} id="winnerForm" onSubmit={addParticipants}>
        <fieldset style={styles.field}>
          <legend style={styles.legend}>Participante:</legend>
          <input 
            type="text" 
            style={styles.input}
            value={person}
            onChange={(e) => setPerson(e.target.value)}
            required
            />
        </fieldset>
        <span style={styles.warn}> Você pode usar , para separar os items ;) </span>
        <button style={styles.button} type="submit" class="add">Adicionar!</button>
      </form>
      <div style={styles.participantPart} id="participants">
        <button style={styles.button2} onClick={clearAll}>Clear All</button>
        <div
        style={participants.length == 0 
        ? styles.noPart
        : styles.participant}
        >
        {participants.length == 0 
        ? <p>None Participants</p> 
        : participants.map(people => (
          <Card key={participants.indexOf(people)} name={people}>
            <i style={styles.icon} refPart={participants.indexOf(people)} onClick={removePeople} className="fas fa-times"></i>
          </Card>
        ))}
        
        </div>
      </div>
      <button style={styles.giveBtn} onClick={giveaway} id="giveaway">Giveaway</button>
      {winner && <Winner win={winner} disable={setWinner} />}
    </div>
  )
}

export default App