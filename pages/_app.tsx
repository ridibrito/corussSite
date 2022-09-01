import '../styles/globals.css'
import Head from 'next/head'
import Navtop from '../components/navtop'
import Navbar from '../components/navbar'
import type { AppProps } from 'next/app'



function MyApp({ Component, pageProps }: AppProps) {
   
  
  return (
    <>
      <Head>
        <title>Coruss - Bem vindo a liberdade!</title>
        <meta
          name="description"
          content="Gestão completa para o corretor de planos de saúde"
        ></meta>
        <link rel="shortcut icon" href="/icone2.png" />
      </Head>
      <Navtop />
      <Navbar />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
