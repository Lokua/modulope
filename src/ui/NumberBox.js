import React from 'react'
import styled from 'styled-components'
import BaseNumberBox from '@lokua/number-box'
import { isNil, values } from 'ramda'
import ax, { theme } from '../styles'

const colors = values(theme.color.colors)

function getColor(p) {
  if (p.color) {
    return ax.color(p.color)(p)
  }

  if (!isNil(p.colorIndex)) {
    return colors[p.colorIndex % colors.length]
  }

  return ax.color('inputBackground')(p)
}

const NumberBox = styled(({ color, colorIndex, ...p }) => (
  <BaseNumberBox {...p} />
))`
  width: 6rem;
  padding: 0.5rem 1rem;
  border: 2px solid ${getColor};
  border-radius: 2px;
  color: ${ax.color('color')};
  background-color: ${getColor};
  font-family: monospace;
  font-size: 1em;
  text-align: center;
  cursor: ns-resize;

  &::selection {
    background-color: transparent;
  }

  &:focus {
    outline: 0;
  }
`

NumberBox.floatProps = {
  min: 0,
  max: 1,
  step: 0.01,
  decimals: 2
}

export default NumberBox
