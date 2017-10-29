import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'whatwg-fetch' // polyfill for fetch()

import { List, DetailHolder } from './style.js'
import Offer from '../../components/Offer'
import OfferDetail from '../../components/OfferDetail'
import Filters from '../../components/Filters'
import { askForOffers } from '../../data/offers/actions'

class Home extends Component {
  componentDidMount() {
    this.props.askForOffers()
  }

  render() {
    // Loading until data is fetched
    if (this.props.data !== null) {
      return (
        <div>
          <List>
            <Filters />
            {this.props.data.map(i => <Offer key={i.id} {...i} />)}
          </List>
          <DetailHolder>
            <OfferDetail />
          </DetailHolder>
        </div>
      )
    } else return <h1> Loading... </h1>
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
  }
}

const mapDispatchToProps = {
  askForOffers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
