import { watchAskForOffers } from './data/offers/sagas'

export default function* rootSaga() {
  yield [watchAskForOffers()]
}
