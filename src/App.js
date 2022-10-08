import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setresult] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {

    if (
      ops.includes(value) && calc == '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
      ) {
        return;
      }
    if (!ops.includes(value)) {
      setresult(eval(calc+value).toString());
    }
    setCalc(calc + value);
  }
  const createdigit = () => {
    const digit = [];
    for (let i = 1; i < 10; i++) {
      digit.push(
        <button
        onClick={() => updateCalc(i.toString())}
        key={i}>
          {i}
        </button>
      )
    }
    return digit;
  }
  const calculate = () => {
    setCalc(eval(calc).toString());
    setresult("");
  }
  const clear=()=>{
    setCalc("");
    setresult("");
  }
  
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ''}
          &nbsp;
          {calc || '0'}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc('+')} >+</button>
          <button onClick={() => updateCalc('-')} >-</button>
          <button onClick={() => updateCalc('/')} >/</button>
          <button onClick={() => updateCalc('*')} >*</button>
          <button onClick={clear}>C</button>
        </div>
        <div className="digit">
          {createdigit()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
