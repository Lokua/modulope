import { injectGlobal } from 'styled-components'
import styledAx from 'styled-ax'

export const theme = {
  color: {
    primary: 'dodgerblue',
    background: '#222',
    color: '#eee',
    inputBackground: '#555',
    panelBackground: '#333',
    colors: {
      red: 'red',
      orange: 'orange',
      yellow: 'yellow',
      green: 'green',
      blue: 'blue',
      purple: 'purple',
      pink: 'pink'
    }
  }
}

export default styledAx(theme)

injectGlobal`
  *,
  *:before,
  *:after {
    font-family: monospace;
  }

  html {
    height: 100%;
    font-size: 10px;
  }

  body {
    overflow: hidden;
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 14px;
  }

  #root {
    overflow: hidden;
    height: 100%;
  }

  a:link, a:visited, a:hover {
    color: ${theme.color.inputBackground};
  }

  hr {
    background-color: none;
    border-bottom: 1px solid ${theme.color.panelBackground};
  }
`
