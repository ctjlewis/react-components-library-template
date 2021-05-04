import { ComponentClass } from 'react'
import '../styles/globals.css'

interface NextAppArgs {
  Component: ComponentClass;
  pageProps: object;
}

function MyApp({ Component, pageProps }: NextAppArgs) {
  return <Component {...pageProps} />
}

export default MyApp
