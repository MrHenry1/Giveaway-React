import styled from 'styled-components'

export const Block = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
`

export const ParticipantBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:${props => props.part ? '' : 'center'};
  align-items:${props => props.part ? '' : 'center'};
  width: 100%;
  height: 125px;
  overflow: scroll;
  border: 7px solid #dedede;
  border-radius: 7px;
  padding: 6px;
`

export const SadMessage = styled.div`
  font-family: Poppins, sans-serif;
  font-size: 15pt;
  font-weight: bold;
  color: gray;
`

export const Icon = styled.i`
  color: #512424;
  font-size: 10pt;
  margin-left: 5px;
`

export const ClearBtn = styled.button`
    font-family: Poppins, sans-serif;
    font-size: 10pt;
    font-weight: 500;
    border: 0;
    margin-top: 2px;
    color: #ff7777;
    border-radius: 6px;
    padding: 5px;
    background-color: transparent;
    align-self: flex-end;
`