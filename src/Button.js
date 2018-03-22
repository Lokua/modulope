import styled from 'styled-components'

export default styled.button`
  min-width: 4rem;
  padding: 0.5rem 1rem;
  border: 2px solid black;
  border-radius: 2px;
  color: black;
  background-color: ${p => p.color || 'white'};
  font-family: monospace;
  font-size: 1em;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`
