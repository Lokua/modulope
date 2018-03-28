import React, { Component } from 'react'
import { view } from 'react-easy-state'
import Tone from 'tone'

import store from '../store'
import Button from '../ui/Button'
import NumberBox from '../ui/NumberBox'
import Field from '../ui/Field'
import { Container } from './styled'

class Transport extends Component {
  componentDidMount() {
    Tone.Transport.bpm.value = store.bpm

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

  setBpm = value => {
    Tone.Transport.bpm.value = store.bpm = value
  }

  render() {
    return (
      <Container>
        <Button onClick={this.toggleTransport}>
          {store.playing ? 'stop' : 'start'}
        </Button>
        <Field>
          <label>BPM</label>
          <NumberBox
            min="1"
            max="999"
            step="1"
            value={store.bpm}
            onChange={this.setBpm}
          />
        </Field>
      </Container>
    )
  }
}

export default view(Transport)
