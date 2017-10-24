import styled from 'styled-components'

export const List = styled.section`
  float: left;
  padding-top: 30px;
  max-width: 600px;
  box-shadow: 2.5px 0px 15px #777;
  font-family: sans-serif;
`

export const DetailHolder = styled.section`
  right: 0;
  position: fixed;
  z-index: -1;
  height: 100vh;
  width: calc(100% - 600px);
  background: #47b2c3;
`
