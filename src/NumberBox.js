import styled from 'styled-components'
import NumberBox from '@lokua/number-box'
import theme from './styles'

export default styled(NumberBox)`
  width: 6rem;
  padding: 0.5rem 1rem;
  border: 2px solid ${theme.color.inputBackground};
  border-radius: 2px;
  color: ${theme.color.background};
  background-color: ${theme.color.inputBackground};
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
