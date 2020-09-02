import React from 'react'

import styles from '../styles/winStyle.js'

const Winner = ({win, disable}) => {
  return (
    <div style={styles.modal}>
      <div style={styles.box}>
        <div style={styles.closeContainer}>
          <i className="fas fa-times" onClick={()=> disable(null)} style={styles.close}></i>
        </div>
        <div style={styles.header}>
          <h1 style={styles.title}>Parabens!!</h1> 
        </div>
        <i className='fas fa-gift' style={styles.gift}></i>
        <div style={styles.messageBox}>
          <strong style={styles.winner}>{win}</strong> 
          <p style={styles.message}>Ganhou!</p>
          <p style={styles.footer}>Se não gostou, tente novamente!</p>
        </div>
      </div>
    </div>
  )
}

export default Winner