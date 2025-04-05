import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"
import { useState } from "react"
import  axios  from "axios"
import imagemPrincipal from './assets/login.png'

import './ModalLogin.css'

interface PropsModalCandastro {
    aberta: boolean
    aoFechar: () => void
}

const ModalLogin = ({ aberta, aoFechar} : PropsModalCandastro) => {


    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


    const aoSubmeterFormular = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        const usuario = {
            email,
            senha
        }
        console.log(usuario)

        axios.post('http://localhost:8000/public/login', usuario)
            .then(() => {
                alert('Usuário logado!')
                setEmail('')
                setSenha('')
                aoFechar()
            })
            .catch(() => {
                alert('ops, deu algo errado')
            })
    }

    return (<AbModal 
        titulo="Login" 
        aberta={aberta}
        aoFechar={aoFechar}    
    >
        <section className="corpoModalCadastro">
            <figure>
                <img src={imagemPrincipal} alt="Pessoa segurando uma chave na frente de uma tela de computador que está exibindo uma fechadura" />
            </figure>
            <form onSubmit={aoSubmeterFormular}>
                <AbCampoTexto 
                    label="E-mail"
                    value={email}
                    onChange={setEmail}
                    type="email"
                />
                <AbCampoTexto 
                    label="Senha"
                    value={senha}
                    onChange={setSenha}
                    type="password"
                />
                <div className="acoes">
                    <AbBotao texto="Login"/>
                </div>
            </form>
        </section>
    </AbModal>)
}

export default ModalLogin