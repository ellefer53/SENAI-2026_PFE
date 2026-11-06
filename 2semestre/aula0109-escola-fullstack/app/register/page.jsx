"use client";

import { useRouter } from "next/navigation";
import styles from "../cadalunos/cadaluno.module.css";

export default function Register() {
    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();
        router.push("/login");
    }

    return (
        <main className={styles.main}>
            <section className={styles.container}>
                <div className={styles.painel}>
                    <h2>Cadastro</h2>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.campo}>
                            <label htmlFor="usuario">Usuário</label>
                            <input id="usuario" name="usuario" type="text" placeholder="Digite seu usuário" />
                        </div>

                        <div className={styles.campo}>
                            <label htmlFor="nome">Nome</label>
                            <input id="nome" name="nome" type="text" placeholder="Digite seu nome" />
                        </div>

                        <div className={styles.campo}>
                            <label htmlFor="senha">Senha</label>
                            <input id="senha" name="senha" type="password" placeholder="Digite sua senha" />
                        </div>

                        <div className={styles.campo}>
                            <label htmlFor="confirmarSenha">Confirmar senha</label>
                            <input id="confirmarSenha" name="confirmarSenha" type="password" placeholder="Confirme sua senha" />
                        </div>

                        <button type="submit" className={styles.botao}>
                            Cadastrar
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}