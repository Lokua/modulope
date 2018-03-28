import styled from 'styled-components'
import ax from '../styles'

export const Container = styled.div`
  display: grid;
  grid-template-rows: min-content auto 100px;
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

  > section {
    display: flex;
  }
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

  &:last-child {
    margin-bottom: 2rem;
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`
