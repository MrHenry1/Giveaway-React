import React from 'react'

import { Form, Field, Input, Warn, Legend, AddBtn } from './styles.js'

const FormParticipants = ({ use: { myParticipants, myPersons}}) => {
  
  const addParticipants = async (e) => {
    e.preventDefault()
  
    const everyPerson = myPersons.person.split(',')
  
    let personWithoutTrim = []
    const personTrated = []
  
    everyPerson.forEach(item => {
      if (item && item != " ".repeat(item.length) && item != "⠀".repeat(item.length)) {
        personWithoutTrim.push(item.trim())
      }
    })
  
    for (let personInputed of personWithoutTrim) {
      if (myParticipants.participants.includes(personInputed)) {
        return alert(`${personInputed} Already Exists!`)
      }
  
      const existsIn = personTrated.indexOf(personInputed)
  
      if (existsIn === -1) {
        personTrated.push(personInputed)
      }
    }
  
    if(myParticipants.participants.length <= 50 && myParticipants.participants.length + personTrated.length <= 50) {
      myParticipants.state([...myParticipants.participants, ...personTrated])
      myPersons.state('')
    }
    else {
      return alert('You reach the maximun')
    }
  }
  
  return (
    <Form onSubmit={addParticipants}>
      <Field>
        <Legend>Participante:</Legend>
        <Input 
        type="text" 
        value={myPersons.person}
        onChange={(e) => myPersons.state(e.target.value)}
        required
        />
      </Field>
      <Warn> Você pode usar , para separar os items ;) </Warn>
      <AddBtn type="submit">Adicionar!</AddBtn>
    </Form>
  )
}

export default FormParticipants