import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  top: 50vh;
  left: 50%;
  margin: -200px 20px 20px -300px;
  min-height: 400px;
  width: 600px;
  font-family: sans-serif;
`

export const Box = styled.div`
  display: inline-block;
  padding: 20px;
  background-color: #fff;
  vertical-align: top;
  box-shadow: 2.5px 0px 15px #777;
`

export const StoryBox = Box.extend`
  margin-right: 2%;
  width: 60%;
`

export const DetailBox = Box.extend`width: 38%;`

export const Name = styled.p`
  margin: 0;
  font-size: 1.5em;
`
export const H = styled.p`
  margin: 5px 0;
  font-size: 1.2em;
`
export const P = styled.p`
  margin: 15px 0;
  font-size: 1em;
`
export const Ul = styled.ul`
  padding: 0;
  list-style-type: none;
`
export const Li = styled.li`
  margin: 2.5px 0;
  font-size: 1.2em;
`
export const Highlight = styled.span`font-weight: bold;`
