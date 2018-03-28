import styled from 'styled-components'
import { darken } from 'polished'
import { identity } from 'ramda'
import ax from '../styles'

const kindOr = (or, fn = identity) => p => ax.color(p.kind || or)(fn)(p)

export default styled.button`
  align-self: center;
  min-width: 4rem;
  padding: 0.5rem 1rem;
  border: 1px solid ${kindOr('color')};
  border-radius: 2px;
  color: ${ax.color('color')};
  background-color: ${kindOr('background', darken(0.1))};
  font-family: monospace;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${kindOr('background', darken(0.2))};
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }
`
