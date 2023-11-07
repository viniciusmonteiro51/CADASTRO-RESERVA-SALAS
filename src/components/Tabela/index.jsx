import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import axios from 'axios'
import {BsFillCalendarDateFill} from 'react-icons/bs'
export default function Tabela() {

    const [reserva, setReserva] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/reservas')
            .then(resultado => setReserva(resultado.data))
    }, [])

    function formatarData(data) {
        const dataFormatada = new Date(data)
        const dia = dataFormatada.getDate().toString().padStart(2, '0')
        const mes = (dataFormatada.getMonth() + 1).toString().padStart(2, '0')
        const ano = dataFormatada.getFullYear()
        const hora = dataFormatada.getHours().toString().padStart(2, '0')
        const minuto = dataFormatada.getMinutes().toString().padStart(2, '0')
        const segundo = dataFormatada.getSeconds().toString().padStart(2, '0')

        return `${dia}/${mes}/${ano} às ${hora}:${minuto}:${segundo}`
    }

    return (
        <>
            <div>
                <div className={styles.title}>
                    <img 
                    src='/date.png'
                    style={{width:'48px', height:'48px'}}
                    />
                    <h1>Reservas realizadas: {reserva.length}</h1>
                </div>
                <div className={styles.container}>
                    <table className={styles.table}>
                        <thead className={styles.thead}>
                            <tr>
                                <th>Descrição</th>
                                <th>Solicitante</th>
                                <th>Sala</th>
                                <th>Início</th>
                                <th>Fim</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tbody}>
                            {reserva?.map(e => (
                                <tr key={e.id} onClick={() => console.log(e)}>
                                    <td>{e.descricao}</td>
                                    <td>{e.solicitante}</td>
                                    <td>{e.sala}</td>
                                    <td>{formatarData(e.inicio)}</td>
                                    <td>{formatarData(e.fim)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


        </>
    )
}