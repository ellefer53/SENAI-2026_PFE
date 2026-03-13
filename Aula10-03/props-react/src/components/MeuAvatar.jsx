import queen from '../assets/IMG/queen.jpg'
import '../App.css'
export default function MeuAvatar({nome, idade, anoEscola, gosto, estilo}) {
    return(
        <>
            <img src={queen} alt="" className='queen' />
            <h1>{nome}</h1>
            <p>Idade: {idade}</p>
            <p>Escolaridade: {anoEscola}</p>
            <p>Gosto de: {gosto}</p>
            <p>Estilo Musical: {estilo}</p>
        </>
    )
}