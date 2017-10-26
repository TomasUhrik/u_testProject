// import 'babel-polyfill'

import { takeLatest, call, put } from 'redux-saga/effects'
import { ASK_FOR_OFFERS } from './constants'
import { receiveOffers } from './actions'

// 0)
export function askForOffers() {
  return fetch(`https://api.zonky.cz/loans/marketplace`).then(response =>
    response.json(),
  )
}

// 1) Worker
export function* doAskForOffers() {
  try {
    // gets data from Zonky API
    const response = yield call(askForOffers)

    // stores them in Redux state
    yield put(receiveOffers(response))
  } catch (e) {
    console.log(e)
  }
}

// 2) watching for action
export function* watchAskForOffers() {
  yield takeLatest(ASK_FOR_OFFERS, doAskForOffers)
}
