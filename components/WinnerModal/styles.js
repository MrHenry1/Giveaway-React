import styled from 'styled-components'

export const Modal = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.36);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BoxContainer = styled.div`
  opacity: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff8f7;
  width: calc(100% - 20px);
  height: 410px;
  padding: 5px;
`

export const CloseContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 4px 12px 0 0;
  justify-content: flex-end;
  align-items: flex-start;
`

export const CloseBtn = styled.div`
  color:#a0041e;
`

export const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 8px;
`
export const Congratulations = styled.h1`
  color: #d76d6d;
  font-family: Poppins, sans-serif;
  font-weight: bold;
  font-size: 31pt;
`
export const IconGift = styled.i`
  position: relative;
  color: #ff8922;
  transform: scale(8);
  margin-top: 70px;
`
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`
export const Winner = styled.strong`
  font-family: Poppins, sans-serif;
  font-weight: bold;
  color: #dd2e44;
  font-size: 14pt;
`
export const Win = styled.p`
  font-family: Poppins, sans-serif;
  font-weight: 500;
  letter-spacing: 2px;
  font-size: 20pt;
  color: #ff7777;
`
export const Footer = styled.p`
  font-family: Poppins, sans-serif;
  color: #666666;
  font-size: 12pt;
`
