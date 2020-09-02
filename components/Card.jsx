import React from 'react'

import styles from "../styles/CardStyle.js"

const Card = ({name, children}) => {
  return (
    <div style={styles.participant}>
      <span>{name}</span>
      {children}
    </div>
  )
}

export default Card