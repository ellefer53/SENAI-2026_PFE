const estudantes = [
    { id: 1, nome: "Mariana", idade: 17, ra: 176789, disciplina: "Matématica" },
    { id: 2, nome: "Isabella", idade: 80, ra: 789043, disciplina: "Lingua Portuguesa" },
    { id: 3, nome: "Luiz", idade: 17, ra: 176789, disciplina: "Educação Fisica" },
]

export default function ListaFiltrar({ titulo }) {
    const lista = estudantes.filter(estudante => estudante.disciplina === "Matématica")

    const listaEstudantes = lista.map((estudante) => {
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