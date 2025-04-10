import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"
import { useState } from "react"
import imagemPrincipal from './assets/login.png'
import http from "../../http"
import './ModalLogin.css'

interface PropsModalCandastro {
    aberta: boolean
    aoFechar: () => void
    aoEfetuarLogin: () => void
}

const ModalLogin = ({ aberta, aoFechar, aoEfetuarLogin} : PropsModalCandastro) => {


    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


    const aoSubmeterFormular = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        const usuario = {
            email,
            senha
        }

        http.post('public/login', usuario)
            .then(resposta => {
               sessionStorage.setItem('token', resposta.data.access_token)
               setEmail('')
               setSenha('')
               aoFechar()
               aoEfetuarLogin()
            })
            .catch(erro => {
                if(erro?.response?.data?.message){
                    alert(erro.response.data.message)
                } else {
                    alert('Aconteceu algo inesperado ao efetuar o seu login')
                }
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