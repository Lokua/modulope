import React, { Component } from 'react'
import { view } from 'react-easy-state'
import Tone from 'tone'
import styled from 'styled-components'

import { mapTimes } from './util'
import store from './store'
import Synth from './Synth'
import Button from './Button'
import theme from './styles'

const Container = styled.div`
  height: 100%;
  padding: 2rem;
  color: ${theme.color.color};
  background-color: ${theme.color.background};

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
