
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import theme from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider theme={theme}>
  <Component {...pageProps} />
  </ThemeProvider>
  )
}
export default MyApp
