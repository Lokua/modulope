import React, { Component } from 'react'
import { view } from 'react-easy-state'
import Tone from 'tone'
import styled from 'styled-components'

import { mapTimes } from './util'
import transportStore from './transportStore'
import Synth from './Synth'
import Button from './Button'

const Container = styled.div`
  padding: 2rem;

  > header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    padding: 1rem;
  }

  > main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    > div:not(:last-child) {
      margin-right: 1rem;
    }
  }
`

class App extends Component {
  componentDidMount() {
    Tone.Transport.bpm.value = 127

    Tone.Transport.scheduleRepeat(time => {
      transportStore.index++
      Tone.Transport.emit('bang', time, transportStore.index)
    }, '16n')
  }

  toggleTransport = () => {
    Tone.Transport.toggle()
    transportStore.playing = !transportStore.playing
    transportStore.index = -1
  }

  render() {
    return (
      <Container>
        <header>
          <Button onClick={this.toggleTransport}>
            {transportStore.playing ? 'stop' : 'start'}
          </Button>
          <Button onClick={() => transportStore.deviceCount--}>-</Button>
          <Button onClick={() => transportStore.deviceCount++}>+</Button>
        </header>
        <main>
          {mapTimes(transportStore.deviceCount, index => <Synth key={index} />)}
        </main>
      </Container>
    )
  }
}

export default view(App)
