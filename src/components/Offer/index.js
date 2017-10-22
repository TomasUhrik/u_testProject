import React, { Component } from 'react'

import { Box, Img, TextHolder, Name, Story } from './style.js'

class Offer extends Component {
  render() {
    return (
      <Box>
        <Img />
        <TextHolder>
          <Name> Ivan Bartos </Name>
          <Story>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </Story>
        </TextHolder>
      </Box>
    )
  }
}

export default Offer
