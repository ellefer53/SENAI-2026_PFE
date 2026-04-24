const estudantes = [
    { id: 1, nome: "Mariana", idade: 17, ra: 176789, },
    { id: 2, nome: "Isabella", idade: 80, ra: 789043, },
    { id: 3, nome: "Mariana", idade: 17, ra: 176789, },
]

export default function ListaMap({ titulo }) {
    const listaEstudantes = estudantes.map((estudante) => {
        return <li key={estudante.id}>
            <h3>{estudante.nome}</h3>
            <p>Idade: {estudante.idade}</p>
            <p>RA: {estudante.ra}</p>
        </li>
    })

    return (
        <>
            <h1>
                {titulo}
            </h1>
            <ul>
                {listaEstudantes}
            </ul>
        </>
    )
}