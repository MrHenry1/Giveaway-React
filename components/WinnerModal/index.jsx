import React from 'react'

import {Modal, BoxContainer, CloseContainer, CloseBtn, Header, Congratulations, IconGift, Description, Winner, Win, Footer} from './styles.js'

const WinnerModal = ({win, disable}) => {
  return (
    <Modal>
      <BoxContainer>
        <CloseContainer>
          <CloseBtn className="fas fa-times" onClick={()=> disable(null)}></CloseBtn>
        </CloseContainer>
        <Header>
          <Congratulations>Parabens!!</Congratulations> 
        </Header>
        <IconGift className='fas fa-gift'></IconGift>
        <Description>
          <Winner>{win}</Winner> 
          <Win>Ganhou!</Win>
          <Footer>Se não gostou, tente novamente!</Footer>
        </Description>
      </BoxContainer>
    </Modal>
  )
}

export default WinnerModal