import { useState } from "react";
import '../assets/CSS/calc.css'

export default function Calculadora() {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [n1m, setN1m] = useState(0);
    const [n2m, setN2m] = useState(0);
    const [resultadom, setResultadom] = useState(0);
    const [n1s, setN1s] = useState(0);
    const [n2s, setN2s] = useState(0);
    const [resultados, setResultados] = useState(0);
    const [n1d, setN1d] = useState(0);
    const [n2d, setN2d] = useState(0);
    const [resultadod, setResultadod] = useState(0);
    const [n1p, setN1p] = useState(0);
    const [n2p, setN2p] = useState(0);
    const [resultadop, setResultadop] = useState(0);
    const [n1r, setN1r] = useState(0);
    const [n2r, setN2r] = useState(0);
    const [resultador, setResultador] = useState(0);

    function somar(e) {
        e.preventDefault();
        if(Number(n1) > 0 && Number(n2) > 0) {
            setResultado(Number(n1) + Number(n2));
            return resultado;
        } else {
            return ''
        }
    }
    function dividir(e) {
        e.preventDefault();
        if(Number(n1d) > 0 && Number(n2d) > 0) {
            setResultadod(Number(n1d) / Number(n2d));
            return resultadod;
        } else {
            return ''
        }
    }
    function multiplaca(e) {
        e.preventDefault();
        if(Number(n1m) > 0 && Number(n2m) > 0) {
            setResultadom(Number(n1m) * Number(n2m));
            return resultadom;
        } else {
            return ''
        }
    }
    function sub(e) {
        e.preventDefault();
        if(Number(n1s) > 0 && Number(n2s) > 0) {
            setResultados(Number(n1s) - Number(n2s));
            return resultados;
        } else {
            return ''
        }
    }
    function pot(e) {
        e.preventDefault();
        if(Number(n1p) > 0 && Number(n2p) > 0) {
            setResultadop(Number(n1p) ** Number(n2p));
            return resultadop;
        } else {
            return ''
        }
    }
    function raiz(e) {
    e.preventDefault();
    if(Number(n1r) > 0 && Number(n2r) > 0 && Number(n2r) !== 1) {
        setResultador(Math.log(Number(n1r)) / Math.log(Number(n2r)));
        return resultador;
    } else {
        return ''
    }
}

    return(
        <>
    <form className="form-group">
    <h1>Calculadora (SOMA)</h1>
      <label>Número 1</label>
      <input type="number" value={n1} onChange={(e) => setN1(e.target.value)}/>

      <label>Número 2</label>
      <input type="number" value={n2} onChange={(e) => setN2(e.target.value)} />
      <button type="submit" onClick={somar}>CALCULAR</button>
      
      <span>Resultado: {resultado}</span>
    </form>
    <form className="form-group">
    <h1>Calculadora (MULTIPLICAÇÃO)</h1>
      <label>Número 1</label>
      <input type="number" value={n1m} onChange={(e) => setN1m(e.target.value)}/>

      <label>Número 2</label>
      <input type="number" value={n2m} onChange={(e) => setN2m(e.target.value)} />
      <button type="submit" onClick={multiplaca}>CALCULAR</button>
      
      <span>Resultado: {resultadom}</span>
    </form>
    <form className="form-group">
    <h1>Calculadora (DIVISÃO)</h1>
      <label>Número 1</label>
      <input type="number" value={n1d} onChange={(e) => setN1d(e.target.value)}/>

      <label>Número 2</label>
      <input type="number" value={n2d} onChange={(e) => setN2d(e.target.value)} />
      <button type="submit" onClick={dividir}>CALCULAR</button>
      
      <span>Resultado: {resultadod}</span>
    </form>
    <form className="form-group">
    <h1>Calculadora (SUBTRAIR)</h1>
      <label>Número 1</label>
      <input type="number" value={n1s} onChange={(e) => setN1s(e.target.value)}/>

      <label>Número 2</label>
      <input type="number" value={n2s} onChange={(e) => setN2s(e.target.value)} />
      <button type="submit" onClick={sub}>CALCULAR</button>
      
      <span>Resultado: {resultados}</span>
    </form>
    <form className="form-group">
    <h1>Calculadora (POTENCIA)</h1>
      <label>Número</label>
      <input type="number" value={n1p} onChange={(e) => setN1p(e.target.value)}/>

      <label>Potencia</label>
      <input type="number" value={n2p} onChange={(e) => setN2p(e.target.value)} />
      <button type="submit" onClick={pot}>CALCULAR</button>
      
      <span>Resultado: {resultadop}</span>
    </form>
    <form className="form-group">
    <h1>Calculadora (RAIZ)</h1>
      <label>Número com a raiz aplicada</label>
      <input type="number" value={n1r} onChange={(e) => setN1r(e.target.value)}/>

      <label>Numero inicial</label>
      <input type="number" value={n2r} onChange={(e) => setN2r(e.target.value)} />
      <button type="submit" onClick={raiz}>CALCULAR</button>
      
      <span>Resultados: {resultador}</span>
    </form>
    </>
    )
}