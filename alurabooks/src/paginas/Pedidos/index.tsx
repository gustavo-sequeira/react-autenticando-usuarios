import { AbBotao } from "ds-alurabooks"
import axios from 'axios'
import './Pedidos.css'  
import { useEffect } from "react"
import { IPedido } from "../../interfaces/IPedido"

const Pedidos = () => {

    useEffect(() => {

        const token = sessionStorage.getItem('token') 

        axios.get<IPedido[]>('http://localhost:8000/pedidos', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(resposta => console.log(resposta.data))
        .catch(erro => console.log(erro))
    }, [])

    return (
        <section className="pedidos">
            <h1>Meus pedidos</h1>
            <div className="pedido">
                <ul>
                    <li>Pedido: <strong>12345</strong></li>
                    <li>Data do pedido: <strong>12/09/2025</strong></li>
                    <li>Valor total: <strong>R$ 42.00</strong></li>
                    <li>Entrega realizada em:: <strong>15/09/2025</strong></li>
                </ul>

                <AbBotao texto="Detalhes" />
            </div >
            <div className="pedido">
                <ul>
                    <li>Pedido: <strong>12345</strong></li>
                    <li>Data do pedido: <strong>12/09/2025</strong></li>
                    <li>Valor total: <strong>R$ 42.00</strong></li>
                    <li>Entrega realizada em:: <strong>15/09/2025</strong></li>
                </ul>

                <AbBotao texto="Detalhes" />
            </div >
            <div className="pedido">
                <ul>
                    <li>Pedido: <strong>12345</strong></li>
                    <li>Data do pedido: <strong>12/09/2025</strong></li>
                    <li>Valor total: <strong>R$ 42.00</strong></li>
                    <li>Entrega realizada em:: <strong>15/09/2025</strong></li>
                </ul>

                <AbBotao texto="Detalhes" />
            </div >
            <div className="pedido">
                <ul>
                    <li>Pedido: <strong>12345</strong></li>
                    <li>Data do pedido: <strong>12/09/2025</strong></li>
                    <li>Valor total: <strong>R$ 42.00</strong></li>
                    <li>Entrega realizada em:: <strong>15/09/2025</strong></li>
                </ul>

                <AbBotao texto="Detalhes" />
            </div >
            <div className="pedido">
                <ul>
                    <li>Pedido: <strong>12345</strong></li>
                    <li>Data do pedido: <strong>12/09/2025</strong></li>
                    <li>Valor total: <strong>R$ 42.00</strong></li>
                    <li>Entrega realizada em:: <strong>15/09/2025</strong></li>
                </ul>

                <AbBotao texto="Detalhes" />
            </div >
            <div className="pedido">
                <ul>
                    <li>Pedido: <strong>12345</strong></li>
                    <li>Data do pedido: <strong>12/09/2025</strong></li>
                    <li>Valor total: <strong>R$ 42.00</strong></li>
                    <li>Entrega realizada em:: <strong>15/09/2025</strong></li>
                </ul>

                <AbBotao texto="Detalhes" />
            </div >
            <div className="pedido">
                <ul>
                    <li>Pedido: <strong>12345</strong></li>
                    <li>Data do pedido: <strong>12/09/2025</strong></li>
                    <li>Valor total: <strong>R$ 42.00</strong></li>
                    <li>Entrega realizada em:: <strong>15/09/2025</strong></li>
                </ul>

                <AbBotao texto="Detalhes" />
            </div >
            <div className="pedido">
                <ul>
                    <li>Pedido: <strong>12345</strong></li>
                    <li>Data do pedido: <strong>12/09/2025</strong></li>
                    <li>Valor total: <strong>R$ 42.00</strong></li>
                    <li>Entrega realizada em:: <strong>15/09/2025</strong></li>
                </ul>

                <AbBotao texto="Detalhes" />
            </div >
            
    </section >) 
}

export default Pedidos