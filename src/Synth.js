import React from 'react'
import Tone from 'tone'
import { store as createStore, view } from 'react-easy-state'
import { mtof } from '@lokua/midi-util'
import styled from 'styled-components'
import randomInt from 'random-int'
import { rgba } from 'polished'

import CoreNumberBox from '@lokua/number-box'
import NumberBox from './NumberBox'
import globalStore from './store'
import theme from './styles'

const activeColors = { ...theme.color.colors }
delete activeColors.base
delete activeColors.black
delete activeColors.gray
let colorIndex = 0
const colors = Object.keys(activeColors).reduce((acc, key) => {
  acc.push(activeColors[key][2])
  return acc
}, [])

const Container = styled.div`
  display: flex;
  margin: 1rem;
  padding: 2rem;
  border-radius: 2px;
  background-color: ${p =>
    p.active ? rgba(p.activeColor, p.alpha) : theme.color.panelBackground};
  transition: background-color 118ms;
`

const Field = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 0.75em;
  }

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`

class Synth extends React.Component {
  store = createStore({
    oscillator: new Tone.Oscillator(),
    amplitudeEnvelope: new Tone.AmplitudeEnvelope({
      attack: 0.001,
      decay: 0.01,
      sustain: 0.5,
      release: 0.5
    }),
    volume: new Tone.Volume(-Infinity),
    mod: randomInt(1, 16),
    index: -1,
    pitch: randomInt(0, 127),
    activeColor: rgba(colors[colorIndex], 1)
  })

  componentWillMount() {
    colorIndex = (colorIndex + 1) % colors.length
    this.store.oscillator.frequency.value = mtof(this.store.pitch)

    Tone.connectSeries(
      this.store.oscillator,
      this.store.amplitudeEnvelope,
      this.store.volume,
      globalStore.preAmp
    )

    Tone.Transport.on('start', this.onTransportStart)
    Tone.Transport.on('stop', this.onTransportStop)
    Tone.Transport.on('bang', this.onBang)
  }

  componentDidMount() {
    if (globalStore.playing) {
      this.onTransportStart()
    }
  }

  componentWillUnmount() {
    this.store.loop.stop()
    Tone.Transport.off('start', this.onTransportStart)
    Tone.Transport.off('stop', this.onTransportStop)

    Object.keys(this.store).forEach(key => {
      const value = this.store[key]

      if (value instanceof Tone && value.dispose) {
        value.dispose()
      }
    })
  }

  onTransportStart = () => {
    if (this.store.oscillator.state === 'stopped') {
      this.store.oscillator.start()
    }
  }

  onTransportStop = () => {
    this.store.oscillator.stop()
  }

  onBang = (time, index) => {
    if (this.isActive()) {
      this.store.amplitudeEnvelope.triggerAttackRelease('16n', time, 1)
    }

    this.increment()
  }

  isActive() {
    return this.store.index % this.store.mod === 0
  }

  increment() {
    this.store.index = (this.store.index + 1) % this.store.mod
  }

  render() {
    return (
      <Container
        active={this.isActive()}
        activeColor={this.store.activeColor}
        alpha={Tone.dbToGain(this.store.volume.volume.value)}
      >
        <Field>
          <label>Pitch</label>
          <NumberBox
            value={this.store.pitch}
            onChange={value => {
              this.store.pitch = value
              this.store.oscillator.frequency.value = mtof(value)
            }}
          />
        </Field>
        <Field>
          <label>Mod</label>
          <NumberBox
            min={1}
            max={16}
            value={this.store.mod}
            onChange={value => {
              this.store.mod = value
            }}
          />
        </Field>
        {this.store.volume && (
          <Field>
            <label>Volume</label>
            <NumberBox
              min={0}
              max={1}
              step={0.01}
              decimals={2}
              value={CoreNumberBox.roundToDecimal(
                Tone.dbToGain(this.store.volume.volume.value),
                2
              )}
              onChange={value => {
                this.store.volume.volume.value = Tone.gainToDb(value)
              }}
            />
          </Field>
        )}
      </Container>
    )
  }
}

export default view(Synth)
