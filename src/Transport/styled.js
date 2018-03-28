import styled from 'styled-components'
import ax from '../styles'
import store from '../store'

export const Container = styled.div`
  display: flex;
  margin-bottom: 1rem;
`

export const LED = styled.div`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
  border-radius: 50%;
  border: 1px solid ${ax.color('panelBackground')};
  background-color: ${p => (p.on ? ax.color('primary')(p) : 'transparent')};
  transition: background-color ${60000 / store.bpm / 4}ms;
`
