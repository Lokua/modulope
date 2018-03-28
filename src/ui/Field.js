import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.5rem;
    font-size: 0.8em;
    text-align: center;
  }

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`
