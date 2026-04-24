const alunos = [
  { id: 0, name: "Ana", nota: 7, fotoperfil: "https://randomuser.me/api/portraits/women/1.jpg" },
  { id: 1, name: "Bruno", nota: 4, fotoperfil: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, name: "Carla", nota: 9, fotoperfil: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 3, name: "Diego", nota: 5, fotoperfil: "https://randomuser.me/api/portraits/men/2.jpg" },
  { id: 4, name: "Eduarda", nota: 8, fotoperfil: "https://randomuser.me/api/portraits/women/3.jpg" }
];

export default function ListaAlunos({ titulo }) {
    const alunosFiltrado = alunos.filter(aluno => aluno.nota >= 6)

    const listaAlunos = alunosFiltrado.map((aluno) => {
        return <li key={aluno.id}>
            <h3>{aluno.name}</h3>
            <p>Nota: {aluno.nota}</p>
            <img src={aluno.fotoperfil} alt="" />
        </li>
    })

    return (
        <>
        <h1>
            {titulo}
        </h1>
        <ul>
            {listaAlunos}
        </ul>
        </>
    )
}