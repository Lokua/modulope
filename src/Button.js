import styled from 'styled-components'
import theme from './styles'

export default styled.button`
  min-width: 4rem;
  padding: 0.5rem 1rem;
  border: 2px solid ${theme.color.color};
  border-radius: 2px;
  color: ${theme.color.color};
  background-color: ${theme.color.background};
  font-family: monospace;
  font-size: 1em;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`
