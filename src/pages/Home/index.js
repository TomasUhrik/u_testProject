import React from 'react'
import { List, DetailHolder } from './style.js'
import Offer from '../../components/Offer'

const Home = () => {
  return (
    <div>
      <List>
        <Offer />
      </List>

      <DetailHolder />
    </div>
  )
}

export default Home
