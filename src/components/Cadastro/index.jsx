import styles from './styles.module.css'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from '../Input';

export default function Cadastro() {
    const [reserva, setReserva] = useState({
        descricao:"",
        solicitante:"",
        sala:"",
        inicio:"",
        fim:""
    });

    async function inserirReserva(e){
        e.preventDefault()
        
        function limparReserva(){
            setReserva({
                descricao:"",
                solicitante:"",
                sala:"",
                inicio:"",
                fim:""
            });
        }
        if (!termo) {
            toast.error('Por favor, concorde com os termos antes de prosseguir.');
            return;
        }

        axios.post('http://localhost:3001/reservas', reserva)
            .then(resultado => {
                console.log(resultado.data);
                limparReserva();
                toast.success('Agendamento realizado com sucesso!');
            })
            .catch(error => {
                console.log(error);
                toast.error('Não foi possivel realizar seu agendamento, por favor tente novamente mais tarde!');
            })
    }

    const [termo, setTermo] = useState(false);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Reservar sala</h1>
                </div>
                <form>
                    <div className={styles.subcontainer}>
                        <div>
                            <label htmlFor='descricao'>Descrição:</label>
                            <br />
                            <textarea
                                name='descricao'
                                id='descricao'
                                type='text'
                                className={styles.textarea}
                                value={reserva.descricao}
                                onChange={e => setReserva({
                                    ...reserva,
                                    descricao: e.target.value
                                })}
                                >
                                
                            </textarea>
                        </div>
                        <div>
                            <label htmlFor='solicitante'>Solicitante:</label>
                            <br />
                            <Input
                                name='solicitante'
                                id='solicitante'
                                type='text'
                                value={reserva.solicitante}
                                onChange={e => setReserva({
                                    ...reserva,
                                    solicitante: e.target.value
                                })}
                            />
                        </div>
                        <div>
                            <label htmlFor='sala'>Sala:</label>
                            <br />
                            <select 
                            className={styles.select} 
                            name='sala' id='sala' 
                            value={reserva.sala}
                            onChange={e => setReserva({
                                ...reserva,
                                sala: e.target.value
                            })}
                            >
                                <option value='Bloco A'>Bloco A</option>
                                <option value='Bloco B'>Bloco B</option>
                                <option value='Bloco C'>Bloco C</option>
                                <option value='Bloco D'>Bloco D</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor='inicio'>Início:</label>
                            <br />
                            <Input
                                id='inicio'
                                type='datetime-local'
                                name='inicio'
                                value={reserva.inicio}
                                onChange={e => setReserva({
                                    ...reserva,
                                    inicio: e.target.value
                                })}
                            />
                        </div>
                        <div>
                            <label htmlFor='fim'>Fim:</label>
                            <br />
                            <Input
                                id='fim'
                                type='datetime-local'
                                name='fim'
                                value={reserva.fim}
                                onChange={e => setReserva({
                                    ...reserva,
                                    fim: e.target.value
                                })}
                            />
                        </div>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    name="termos"
                                    id="termos"
                                    className={styles.checkbox}
                                    checked={termo}
                                    onChange={(e) => setTermo(e.target.checked)}
                                />
                                Concordo com os termos
                            </label>
                        </div>
                        <div className={styles.containerbutton}>
                            <button className={styles.button} type='submit'>Reservar sala</button>
                        </div>

                    </div>

                </form>
            </div>
        </>
    )
}