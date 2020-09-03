import React from 'react'

import { CardContainer } from "./styles.js"

const Card = ({name, children}) => {
  return (
    <CardContainer>
      <span>{name}</span>
      {children}
    </CardContainer>
  )
}

export default Card