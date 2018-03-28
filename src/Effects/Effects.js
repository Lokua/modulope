import React, { Component } from 'react'
import Tone from 'tone'
import { store as createStore, view } from 'react-easy-state'
import { mtof, ftom } from '@lokua/midi-util'

import globalStore from '../store'
import NumberBox from '../ui/NumberBox'
import Field from '../ui/Field'
import { round } from '../util'
import { Container, Effect } from './styled'

class Effects extends Component {
  store = createStore({
    reverb: new Tone.Freeverb(),
    delay: new Tone.FeedbackDelay()
  })

  componentWillMount() {
    this.store.reverb.wet.value = 0.5
    this.store.delay.wet.value = 0.5

    Tone.connectSeries(
      globalStore.preAmp,
      this.store.reverb,
      this.store.delay,
      Tone.Master
    )
  }

  render() {
    return (
      <Container>
        <Effect>
          <header>Delay</header>
          <main>
            <Field>
              <label>Time</label>
              <NumberBox
                {...NumberBox.floatProps}
                value={round(this.store.delay.delayTime.value, 2)}
                onChange={value => {
                  this.store.delay.delayTime.value = value
                }}
              />
            </Field>
            <Field>
              <label>Feedback</label>
              <NumberBox
                {...NumberBox.floatProps}
                value={round(this.store.delay.feedback.value, 2)}
                onChange={value => {
                  this.store.delay.feedback.value = value
                }}
              />
            </Field>
            <Field>
              <label>Mix</label>
              <NumberBox
                {...NumberBox.floatProps}
                value={round(this.store.delay.wet.value, 2)}
                onChange={value => {
                  this.store.delay.wet.value = value
                }}
              />
            </Field>
          </main>
        </Effect>
        <Effect>
          <header>Reverb</header>
          <main>
            <Field>
              <label>Dampening</label>
              <NumberBox
                value={ftom(this.store.reverb.dampening.value)}
                onChange={value => {
                  this.store.reverb.dampening.value = mtof(value)
                }}
              />
            </Field>
            <Field>
              <label>Room Size</label>
              <NumberBox
                {...NumberBox.floatProps}
                value={round(this.store.reverb.roomSize.value, 2)}
                onChange={value => {
                  this.store.reverb.roomSize.value = value
                }}
              />
            </Field>
            <Field>
              <label>Mix</label>
              <NumberBox
                {...NumberBox.floatProps}
                value={round(this.store.reverb.wet.value, 2)}
                onChange={value => {
                  this.store.reverb.wet.value = value
                }}
              />
            </Field>
          </main>
        </Effect>
      </Container>
    )
  }
}

export default view(Effects)
