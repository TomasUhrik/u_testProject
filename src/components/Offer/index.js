import React, { Component } from 'react'

import { Box, Img, TextHolder, Name, Story } from './style.js'

class Offer extends Component {
  render() {
    return (
      <Box>
        <Img />
        <TextHolder>
          <Name> {this.props.name} </Name>
          <Story>{this.props.story}}</Story>
        </TextHolder>
      </Box>
    )
  }
}

export default Offer
