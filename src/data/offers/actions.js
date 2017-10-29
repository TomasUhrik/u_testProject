import {
  ASK_FOR_OFFERS,
  RECEIVE_OFFERS,
  FILTER_BY_LENGTH,
  FILTER_BY_RATING,
  FILTER_BY_AMOUNT,
} from './constants'

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

export const filterByLength = () => ({
  type: FILTER_BY_LENGTH,
  payload: {},
})

export const filterByRating = () => ({
  type: FILTER_BY_RATING,
  payload: {},
})

export const filterByAmount = () => ({
  type: FILTER_BY_AMOUNT,
  payload: {},
})
