import {
  ASK_FOR_OFFERS,
  RECEIVE_OFFERS,
  FILTER_BY_LENGTH,
  FILTER_BY_RATING,
  FILTER_BY_AMOUNT,
  SELECT_OFFER,
} from './constants'
const R = require('ramda')

const initialState = {
  data: null,
  offerDetail: null,
}

const offers = (state = initialState, action) => {
  switch (action.type) {
    case ASK_FOR_OFFERS:
      return {
        ...state,
      }

    case RECEIVE_OFFERS:
      return {
        ...state,

        data: action.payload.response,
      }

    case FILTER_BY_LENGTH:
      const sortLength = R.sortWith([R.descend(R.prop('termInMonths'))])
      const dataSortedLength = sortLength(state.data)
      return {
        ...state,

        data: dataSortedLength,
      }

    case FILTER_BY_RATING:
      // Ramda sortWith is not sufficient, because alphabetical sort does not count AA as better than A
      // 1) take data
      let ratingSample = state.data

      // 2) Split rating
      let ratingSplit = ratingSample.map(i => i.rating.split(''))

      // 3) Translate "X" into numbers
      const scoreTable = {
        A: 100,
        B: 10,
        C: 1,
        D: 0,
      }

      let ratingInNumbers = ratingSplit.map(i =>
        i.map(x =>
          Number(x.replace(/A|B|C|D/, matched => scoreTable[matched])),
        ),
      )

      // 4) Sum scores
      let ratingSummed = ratingInNumbers.map(i => i.reduce((a, b) => a + b, 0))

      // 5) Back to data
      for (let i = 0; i < state.data.length; i++) {
        state.data[i].ratingScore = ratingSummed[i]
      }

      // 6) Sort
      const sortRating = R.sortWith([R.descend(R.prop('ratingScore'))])
      const dataSortedRating = sortRating(state.data)

      return {
        ...state,

        data: dataSortedRating,
      }

    case FILTER_BY_AMOUNT:
      const sortAmount = R.sortWith([R.descend(R.prop('amount'))])
      const dataSortedAmount = sortAmount(state.data)
      return {
        ...state,

        data: dataSortedAmount,
      }

    case SELECT_OFFER:
      return {
        ...state,

        offerDetail: action.payload.offer,
      }

    default:
      return state
  }
}

export default offers
