import { ASK_FOR_OFFERS, RECEIVE_OFFERS } from './constants'

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

    default:
      return state
  }
}

export default offers
