import './App.css'
import PropsNomeado from './components/propsNomeado.jsx'
import Mensagem from './components/mensagem.jsx'
import MeuAvatar from './components/MeuAvatar.jsx'

function App() {
  return (
    <>
      <MeuAvatar nome='Mariana' idade='17' anoEscola='3B' gosto='gostar de nada' estilo='FUNK'/>
      {/*<Mensagem titulo='Aprendendo Props ou Properties ou ainda Propriedades' texto='Bem Vindo(a) ao mundo das Props ' nome='Mariana' />
      <Mensagem titulo='Interclasse 2026' texto='Bem Vindo(a) ao interclasse ' nome='Mariana' />*/}

      {/*<PropsNomeado titulo='Interclasse 2026' texto='Bem Vindo(a) ao interclasse ' nome='Mariana' altura={1.65}/>*/}

    </>    
  )
}

export default App
