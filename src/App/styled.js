import styled from 'styled-components'
import ax from '../styles'

export const Container = styled.div`
  height: 100%;
  padding: 2rem;
  color: ${ax.color('color')};
  background-color: ${ax.color('background')};

  > header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    padding: 1rem;
  }

  > main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    > div:not(:last-child) {
      margin-right: 1rem;
    }
  }
`
