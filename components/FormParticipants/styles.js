import styled from 'styled-components'

export const Form = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px 0;
  background-color: #fff8f7;
  width: 320px;
  min-height: 190px;
  padding: 13px;
  border-radius: 13px;
`;

export const Warn = styled.span`
  text-indent: 5px;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  margin-top: 4px;
  font-size: 10pt;
  color: gray;
`

export const Input = styled.input`
  border: 0;
  width: 100%;
  background: none;
  border-bottom: 2px solid gray;
  text-indent: 4px;
  font-family: Poppins, sans-serif;
`

export const Legend = styled.legend`
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 10pt;
  color: #060817;
`

export const AddBtn = styled.button`
  font-family: Poppins, sans - serif;
  font-size: 15pt;
  font-weight: 500;
  margin-top: 13px;
  border: 0;
  background-color: #ffbfbf;
  color: white;
  border-radius: 6px;
  padding: 5px;
  justify-self: flex-end;
`

export const Field = styled.fieldset`
  border:0;
`