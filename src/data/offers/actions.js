import { ASK_FOR_OFFERS, RECEIVE_OFFERS } from './constants'

export const askForOffers = () => ({
  type: ASK_FOR_OFFERS,
  payload: {},
})

export const receiveOffers = response => ({
  type: RECEIVE_OFFERS,
  payload: {
    response,
  },
})
