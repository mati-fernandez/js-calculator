import { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');
  const [lastWasEquals, setLastWasEquals] = useState(false);
  console.log('Display state', display);
  console.log('Last was equals', lastWasEquals);

  const handleClear = () => {
    setDisplay('0');
  };

  const handleClearOne = () => {
    setDisplay((prevDisplay) => {
      if (prevDisplay.length === 1) return '0';
      return prevDisplay.slice(0, -1);
    });
  };

  const handleNumber = (e) => {
    const value = e.target.textContent;
    if (lastWasEquals) {
      setLastWasEquals(false);
      console.log(value);
      setDisplay(value);
    } else {
      setDisplay((prevDisplay) => {
        if (prevDisplay === '0') return value;
        return display + value;
      });
    }
  };

  const handleOperator = (e) => {
    setLastWasEquals(false);
    const value = e.target.textContent;
    setDisplay((prevDisplay) => {
      if (/[/*\-+]$/.test(prevDisplay)) {
        if (value === '-' && /[0-9]/.test(prevDisplay[prevDisplay.length - 2]))
          return prevDisplay + value;
        if (/[.\-/*+]{2}$/.test(prevDisplay)) {
          return prevDisplay.slice(0, -2) + value;
        } else return prevDisplay.slice(0, -1) + value;
      } else {
        return prevDisplay + value;
      }
    });
  };

  const handleEquals = () => {
    if (/[.\-/*+]$/.test(display)) return;
    setDisplay(String(eval(display)));
    setLastWasEquals(true);
  };

  const handleDecimal = () => {
    //
  };

  return (
    <div className="App">
      <h1>JS Calculator</h1>
      <div className="calculator">
        <div id="display">{display}</div>
        <div onClick={handleClear} id="clear">
          AC
        </div>
        <div onClick={handleClearOne} id="clear-one">
          C
        </div>
        <div onClick={handleOperator} id="divide" className="operator">
          /
        </div>
        <div onClick={handleOperator} id="multiply" className="operator">
          *
        </div>
        <div onClick={handleNumber} id="seven" className="number">
          7
        </div>
        <div onClick={handleNumber} id="eight" className="number">
          8
        </div>
        <div onClick={handleNumber} id="nine" className="number">
          9
        </div>
        <div onClick={handleOperator} id="subtract" className="operator">
          -
        </div>
        <div onClick={handleNumber} id="four" className="number">
          4
        </div>
        <div onClick={handleNumber} id="five" className="number">
          5
        </div>
        <div onClick={handleNumber} id="six" className="number">
          6
        </div>
        <div onClick={handleOperator} id="add" className="operator">
          +
        </div>
        <div onClick={handleNumber} id="one" className="number">
          1
        </div>
        <div onClick={handleNumber} id="two" className="number">
          2
        </div>
        <div onClick={handleNumber} id="three" className="number">
          3
        </div>
        <div onClick={handleEquals} id="equals">
          =
        </div>
        <div onClick={handleNumber} id="zero" className="number">
          0
        </div>
        <div onClick={handleDecimal} id="decimal" className="number">
          .
        </div>
      </div>
    </div>
  );
}

export default App;
