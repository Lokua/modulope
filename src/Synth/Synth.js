import React from 'react'
import Tone from 'tone'
import { store as createStore, view } from 'react-easy-state'
import { mtof } from '@lokua/midi-util'
import randomInt from 'random-int'
import { values } from 'ramda'

import CoreNumberBox from '@lokua/number-box'
import NumberBox from '../ui/NumberBox'
import globalStore from '../store'
import { Container, Field } from './styled'

class Synth extends React.Component {
  static instanceCount = 0

  store = createStore({
    hasError: false,
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
    colorIndex: Synth.instanceCount
  })

  componentWillMount() {
    Synth.instanceCount++
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

  componentDidCatch(error, info) {
    // eslint-disable-next-line
    console.info(info)
    this.store.hasError = true
  }

  componentWillUnmount() {
    this.store.loop && this.store.loop.stop()
    Tone.Transport.off('start', this.onTransportStart)
    Tone.Transport.off('stop', this.onTransportStop)

    values(value => {
      value instanceof Tone && value.dispose && value.dispose()
    }, this.store)
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
    if (this.store.hasError) {
      return 'Error...'
    }

    return (
      <Container>
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
