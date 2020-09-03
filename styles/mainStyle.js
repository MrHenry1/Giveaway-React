import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: relative;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 140px;
  font-size: 20pt;
  font-family: Poppins, sans-serif;
  align-items: center;
  justify-content: center;
  background-color: #d76d6d;
  color: white;
`;


export const GiveawayBtn = styled.button`
  width: 240px;
  padding: 5px;
  color: white;
  background-color: #060817;
  font-family: Poppins, sans-serif;
  font-size: 15pt;
  font-weight: bold;
  border:0;
  border-radius:9px;
  margin-top:16px;
`