import {
  ASK_FOR_OFFERS,
  RECEIVE_OFFERS,
  FILTER_BY_LENGTH,
  FILTER_BY_RATING,
  FILTER_BY_AMOUNT,
} from './constants'
const R = require('ramda')

const initialState = {
  data: null,
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
      const sortLength = R.sortWith([R.ascend(R.prop('termInMonths'))])
      const dataSortedLength = sortLength(state.data)
      return {
        ...state,

        data: dataSortedLength,
      }

    case FILTER_BY_RATING:
      const sortRating = R.sortWith([R.ascend(R.prop('rating'))])
      const dataSortedRating = sortRating(state.data)
      return {
        ...state,

        data: dataSortedRating,
      }

    case FILTER_BY_AMOUNT:
      const sortAmount = R.sortWith([R.ascend(R.prop('amount'))])
      const dataSortedAmount = sortAmount(state.data)
      return {
        ...state,

        data: dataSortedAmount,
      }

    default:
      return state
  }
}

export default offers
