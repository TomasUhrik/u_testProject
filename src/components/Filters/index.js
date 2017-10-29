import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Container, H1, Ul, Li } from './style.js'
import {
  filterByLength,
  filterByRating,
  filterByAmount,
} from '../../data/offers/actions'

class Filters extends PureComponent {
  handleFilterByLength = () => {
    this.props.filterByLength()
  }

  handleFilterByRating = () => {
    this.props.filterByRating()
  }

  handleFilterByAmount = () => {
    this.props.filterByAmount()
  }

  render() {
    return (
      <Container>
        <H1> Filtry </H1>
        <Ul>
          <Li onClick={this.handleFilterByLength}> Trvání </Li>
          <Li onClick={this.handleFilterByRating}> Rating </Li>
          <Li onClick={this.handleFilterByAmount}> Částka </Li>
          {/* <Li> Deadline </Li> // How is deadline different from Length? Seems Redundant */}
        </Ul>
      </Container>
    )
  }
}

const mapDispatchToProps = {
  filterByLength,
  filterByRating,
  filterByAmount,
}

export default connect(null, mapDispatchToProps)(Filters)
