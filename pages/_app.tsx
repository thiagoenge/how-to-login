
import type { AppProps } from 'next/app'
import { AuthProvider } from 'src/context/AuthContext'
import 'src/css/tokens.css'
import 'src/css/globals.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
