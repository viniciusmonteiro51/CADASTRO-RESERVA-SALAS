import '@/styles/globals.css'
import Cabecalho from '@/components/Cabecalho'
import Rodape from '@/components/Rodape'
export default function App({ Component, pageProps }) {


  return (
  <>
  <Cabecalho/>
  <Component {...pageProps}/>
  <Rodape/>
  </>
  )
  
}
