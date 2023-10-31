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

    const formatarData = (data) => {
        const optionsData = { day: '2-digit', month: '2-digit', year: 'numeric' };
        const optionsHora = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const dataFormatada = new Date(data).toLocaleDateString('pt-BR', optionsData);
        const horaFormatada = new Date(data).toLocaleTimeString('pt-BR', optionsHora);
        return `${dataFormatada} às ${horaFormatada}`;
      }
      
      

    return (
        <>
            <div>
                <div className={styles.title}>
                    <img 
                    src='/date.png'
                    style={{width:'48px', height:'48px'}}
                    />
                    <h1>Reservas realizadas</h1>
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