import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/globol'
import { defaultTheme } from './styles/themes/default'
import { CyclesContextProvier } from './contexts/CyclesContext'


export function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <CyclesContextProvier>


      <Router />
      </CyclesContextProvier>    
    </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}