import React from 'react'
import { view } from 'react-easy-state'
import StartAudioContext from 'startaudiocontext'
import Tone from 'tone'

import { mapTimes } from '../util'
import store from '../store'
import Transport from '../Transport'
import Effects from '../Effects'
import Synth from '../Synth'
import Button from '../ui/Button'
import NumberBox from '../ui/NumberBox'
import Field from '../ui/Field'
import { round } from '../util'
import { Container, Header, Main, Section, Footer } from './styled'

// FUCK YOU CHROME! :)
StartAudioContext(Tone.context)

export default view(() => (
  <Container onTouchMove={e => e.preventDefault()}>
    <Header>
      <section>
        <Transport />
        <Field>
          <label>Volume</label>
          <NumberBox
            {...NumberBox.floatProps}
            style={{ marginLeft: '0.5rem' }}
            value={round(Tone.dbToGain(store.preAmp.volume.value), 2)}
            onChange={value => {
              store.preAmp.volume.value = Tone.gainToDb(value)
            }}
          />
        </Field>
      </section>
      <Effects />
    </Header>
    <Main>
      <Section>
        <Button onClick={() => store.deviceCount--}>-</Button>
        <Button onClick={() => store.deviceCount++}>+</Button>
      </Section>
      <Section>
        {mapTimes(store.deviceCount, index => <Synth key={index} />)}
      </Section>
    </Main>
    <Footer>
      <a
        href="https://github.com/lokua/modulope.git"
        alt="source code"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://github.com/lokua/modulope.git
      </a>
    </Footer>
  </Container>
))
