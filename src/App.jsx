import { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');

  const handleClick = (e) => {
    const value = e.target.textContent;
    if (value === 'AC') {
      setDisplay('0');
    } else if (/[0-9]/.test(value)) {
      setDisplay((prevDisplay) => {
        if (prevDisplay === '0') return value;
        setDisplay(display + value);
      });
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div id="display" className="row">
          {display}
        </div>
        <div onClick={handleClick} id="clear" className="row">
          AC
        </div>
        <div onClick={handleClick} id="divide" className="operator">
          /
        </div>
        <div onClick={handleClick} id="multiply" className="operator">
          *
        </div>
        <div onClick={handleClick} id="seven" className="number">
          7
        </div>
        <div onClick={handleClick} id="eight" className="number">
          8
        </div>
        <div onClick={handleClick} id="nine" className="number">
          9
        </div>
        <div onClick={handleClick} id="subtract" className="operator">
          -
        </div>
        <div onClick={handleClick} id="four" className="number">
          4
        </div>
        <div onClick={handleClick} id="five" className="number">
          5
        </div>
        <div onClick={handleClick} id="six" className="number">
          6
        </div>
        <div onClick={handleClick} id="add" className="operator">
          +
        </div>
        <div onClick={handleClick} id="one" className="number">
          1
        </div>
        <div onClick={handleClick} id="two" className="number">
          2
        </div>
        <div onClick={handleClick} id="three" className="number">
          3
        </div>
        <div onClick={handleClick} id="equals">
          =
        </div>
        <div onClick={handleClick} id="zero" className="number">
          0
        </div>
        <div onClick={handleClick} id="decimal" className="number">
          .
        </div>
      </div>
    </div>
  );
}

export default App;
