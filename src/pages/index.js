import Cadastro from "@/components/Cadastro"
import Tabela from '@/components/Tabela'
import styles from '@/styles/Home.module.css'
export default function Home() {
  return (
    <>
    <div className={styles.container}>
       <Cadastro/>
       <Tabela/>
    </div>
   
    </>
  )
}
