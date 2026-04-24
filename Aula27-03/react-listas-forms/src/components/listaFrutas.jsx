const frutas = ["banana", "maca", "laranja", "abacaxi"]

export default function ListaFrutas({ titulo }) {
    const listaFrutas = frutas.map((fruta) => {
        return <li>
           {fruta}
        </li>
    })

    return (
        
        <>
            <h1>
                {titulo}
            </h1>

            <ul>
                {listaFrutas}
            </ul>


        </>
    )
}