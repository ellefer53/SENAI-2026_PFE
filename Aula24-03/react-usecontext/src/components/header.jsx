import { useContext } from "react";
import { ContextoTema } from "../contextos/temaContexto";

export default function Header() {

    const { tema, mudaTema } = useContext(ContextoTema);
    
    return (
        <>
            <header className={`header-${tema}`}>
                <h1>
                    Sanches é uma boa amiga
                    <button onClick={mudaTema}>
                        Mudar tema para { tema == 'light' ? 'escuro' : 'claro' }
                    </button>
                </h1>
            </header>
        </>
    )

}