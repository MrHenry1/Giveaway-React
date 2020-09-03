import React from 'react'

import { Block, ParticipantBlock, ClearBtn, SadMessage, Icon } from './styles.js'
import Card from '../Card/index.jsx'

const ShowParticipants = ({use: { ref, state }}) => {
  const removePeople = (e) => {
    const refPeople = e.target.dataset.key
    
    const newParticipants = ref
    
    newParticipants.splice(refPeople, 1)
    
    state([...newParticipants])
  }
  
  const havePart = () => {
    if(ref.length > 0) {
      return true
    }
    return false
  }
  
  const clearAll = () => {
    if (ref.length == 0) {
      return alert('No Participants')
    }
  
    state([])
  }
  
  return (
      <Block>
        <ClearBtn onClick={clearAll}>Clear All</ClearBtn>
        <ParticipantBlock part={havePart()}>
          {havePart()
          ? ref.map(people => (
            <Card key={ref.indexOf(people)} name={people}>
              <Icon data-key={ref.indexOf(people)} onClick={removePeople} className="fas fa-times"></Icon>
            </Card>
            ))
          : <SadMessage>None Participants</SadMessage>
          }
        </ParticipantBlock>
      </Block>
  )
}

export default ShowParticipants