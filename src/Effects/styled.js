import styled from 'styled-components'

import ax from '../styles'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Effect = styled.div`
  margin: 1rem;
  padding: 1rem 2rem 2rem;
  border-radius: 2px;
  background-color: ${ax.color('panelBackground')};
  transition: background-color 118ms;

  > header {
    padding-bottom: 1rem;
    text-align: center;
  }

  > main {
    display: flex;
  }
`
