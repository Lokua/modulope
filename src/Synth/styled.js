import styled from 'styled-components'
import { rgba } from 'polished'
import { isNil, values } from 'ramda'

import ax, { theme } from '../styles'

const colors = values(theme.color.colors)

function getColor(p) {
  if (p.active && !isNil(p.colorIndex)) {
    const index = p.colorIndex % colors.length
    return rgba(colors[index], p.alpha)
  }

  return ax.color('panelBackground')(p)
}

export const Container = styled.div`
  display: flex;
  margin: 1rem;
  padding: 2rem;
  border-radius: 2px;
  background-color: ${getColor};
  transition: background-color 118ms;
`
