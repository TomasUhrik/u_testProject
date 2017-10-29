import styled from 'styled-components'

export const Box = styled.div`
  display: inline-block;
  width: 100%;
  height: 150px;
  border-bottom: 2px solid #555;
  cursor: pointer;
`
export const Img = styled.img`
  display: inline-block;
  max-height: 148px;
  margin: 0 5% 0 0;
  border: none;
  vertical-align: top;
`

export const TextHolder = styled.div`
  display: inline-block;
  width: calc(100% - 300px);
  height: 150px;
  padding: 7.5px 0;
  text-overflow: ellipsis;
  vertical-align: top;
`

export const Name = styled.p`
  font-size: 1.4em;
  margin: 0;
`

export const Story = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`
