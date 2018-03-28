import { store as createStore } from 'react-easy-state'
import Tone from 'tone'

const store = createStore({
  playing: false,
  index: -1,
  deviceCount: 1,
  bpm: 127,
  preAmp: new Tone.Volume()
})

export default store
