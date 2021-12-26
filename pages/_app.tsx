
import type { AppProps } from 'next/app'
import 'src/css/tokens.css'
import 'src/css/globals.css'


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
