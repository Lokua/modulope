import { store as createStore } from 'react-easy-state'
import Tone from 'tone'

const store = createStore({
  playing: false,
  index: -1,
  deviceCount: 1,
  preAmp: new Tone.Volume()
})

Tone.connectSeries(
  store.preAmp,
  new Tone.Freeverb(),
  new Tone.FeedbackDelay(),
  Tone.Master
)

export default store
