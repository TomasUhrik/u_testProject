import React, { Component } from 'react'
import { connect } from 'react-redux'

import { selectOffer } from '../../data/offers/actions'

import { Box, Img, TextHolder, Name, Story } from './style.js'

class Offer extends Component {
  handleOnClick = () => {
    console.log(this.props)
    this.props.selectOffer(this.props)
  }

  render() {
    return (
      <Box onClick={this.handleOnClick}>
        <Img
          alt={this.props.photos[0].name}
          src={'https://api.zonky.cz/' + this.props.photos[0].url}
        />
        <TextHolder>
          <Name> {this.props.name} </Name>
          <Story>{this.props.story} </Story>
        </TextHolder>
      </Box>
    )
  }
}

const mapDispatchToProps = {
  selectOffer,
}

export default connect(null, mapDispatchToProps)(Offer)
