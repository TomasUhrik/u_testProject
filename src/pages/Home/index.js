import React, { Component } from 'react'
import 'whatwg-fetch' // polyfill for fetch()

import { List, DetailHolder } from './style.js'
import Offer from '../../components/Offer'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: '',
    }
  }

  componentDidMount() {
    fetch(`https://api.zonky.cz/loans/marketplace`)
      .then(response => response.json())
      .then(response =>
        this.setState({
          data: response,
        }),
      )
      // Redundant
      .then(response => console.log(this.state.data))
  }

  render() {
    // Loading until data is fetched
    if (this.state.data !== '') {
      return (
        <div>
          {/* I use JSX spread operator to pass in all props  */}
          <List>{this.state.data.map(i => <Offer key={i.id} {...i} />)}</List>

          <DetailHolder />
        </div>
      )
    } else return <h1> Loading... </h1>
  }
}

export default Home
