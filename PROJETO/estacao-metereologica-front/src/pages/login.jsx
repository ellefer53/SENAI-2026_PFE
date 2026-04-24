import { useState } from "react";
import { Link } from "react-router-dom";
import "../pages/login.css"

import imagemEstacao from "../assets/a.png";

export default function Login() {
    const [usuario, setUsario] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <section className="container">
            <div className="card">
                <img src={imagemEstacao} alt="Imagem da Estação Metereologica" />
                <div className="formulario">
                    <h2>Login</h2>

                    <form action="">

                        <label htmlFor="usuario">
                            Usuário
                        </label>

                        <input 
                        type="text" 
                        id="usuario" 
                        className="input" 
                        placeholder="Digite seu usuário" 
                        value={usuario} 
                        onChange={(e) => setUsario(e.target.value)} />
                        


                        <label htmlFor="senha">
                            Senha
                        </label>

                        <input 
                        type="password" 
                        id="senha" 
                        className="input" 
                        placeholder="Digite sua senha" 
                        value={senha} 
                        onChange={(e) => setSenha(e.target.value)} />

                        <Link to='/dashboard' className="botao">
                            Entrar
                        </Link>

                        <Link to='/registro'>Não tem uma conta? Cadastre-se!</Link>
                    </form>
                </div>
            </div>
        </section>
    )
}