import React from 'react'
import { view } from 'react-easy-state'

import { mapTimes } from '../util'
import store from '../store'
import Transport from '../Transport'
import Effects from '../Effects'
import Synth from '../Synth'
import Button from '../ui/Button'
import { Container, Header, Main, Section, Footer } from './styled'

export default view(() => (
  <Container onTouchMove={e => e.preventDefault()}>
    <Header>
      <Transport />
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
