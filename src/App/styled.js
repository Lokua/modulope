import styled from 'styled-components'
import ax from '../styles'

export const Container = styled.div`
  overflow: auto;
  height: 100%;
  padding: 2rem;
  color: ${ax.color('color')};
  background-color: ${ax.color('background')};
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  padding: 1rem;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  > div:not(:last-child) {
    margin-right: 1rem;
  }
`

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
