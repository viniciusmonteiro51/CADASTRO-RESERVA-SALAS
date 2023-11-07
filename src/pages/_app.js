import '@/styles/globals.css'
import Cabecalho from '@/components/Cabecalho'
import Rodape from '@/components/Rodape'
import { ToastContainer } from 'react-toastify';
export default function App({ Component, pageProps }) {


  return (
    <>
      <Cabecalho />
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Component {...pageProps} />
      <Rodape />
    </>
  )

}
