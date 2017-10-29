// import 'babel-polyfill'

import { takeLatest, call, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { ASK_FOR_OFFERS } from './constants'
import { askForOffers, receiveOffers } from './actions'

// 0)
export function askForOffersAPI() {
  return fetch(`https://api.zonky.cz/loans/marketplace`).then(response =>
    response.json(),
  )
}

// 1) Worker
export function* doAskForOffers() {
  try {
    // gets data from Zonky API
    const response = yield call(askForOffersAPI)

    // stores them in Redux state
    yield put(receiveOffers(response))

    // To repeat the process after 5 minutes
    yield delay(300000)
    yield put(askForOffers())
  } catch (e) {
    console.log(e)
  }
}

// 2) watching for action
export function* watchAskForOffers() {
  yield takeLatest(ASK_FOR_OFFERS, doAskForOffers)
}
