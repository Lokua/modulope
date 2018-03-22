import styled from 'styled-components'
import NumberBox from '@lokua/number-box'

export default styled(NumberBox)`
  width: 6rem;
  padding: 0.5rem 1rem;
  border: 2px solid black;
  border-radius: 2px;
  color: black;
  background-color: ${p => p.color || 'white'};
  font-family: monospace;
  font-size: 1em;
  text-align: center;
  cursor: ns-resize;
`
