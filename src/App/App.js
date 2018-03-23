import React, { Component } from 'react'
import { view } from 'react-easy-state'
import Tone from 'tone'

import { mapTimes } from '../util'
import store from '../store'
import Synth from '../Synth'
import Button from '../ui/Button'
import { Container } from './styled'

class App extends Component {
  componentDidMount() {
    Tone.Transport.bpm.value = 127

    Tone.Transport.scheduleRepeat(time => {
      store.index++
      Tone.Transport.emit('bang', time, store.index)
    }, '16n')
  }

  toggleTransport = () => {
    Tone.Transport.toggle()
    store.playing = !store.playing
    store.index = -1
  }

  render() {
    return (
      <Container>
        <header>
          <Button onClick={this.toggleTransport}>
            {store.playing ? 'stop' : 'start'}
          </Button>
          <Button onClick={() => store.deviceCount--}>-</Button>
          <Button onClick={() => store.deviceCount++}>+</Button>
        </header>
        <main>
          {mapTimes(store.deviceCount, index => <Synth key={index} />)}
        </main>
      </Container>
    )
  }
}

export default view(App)
