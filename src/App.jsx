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
        <button onClick={handleClick} id="clear" className="row">
          AC
        </button>
        <button onClick={handleClick} id="divide">
          /
        </button>
        <button onClick={handleClick} id="multiply">
          *
        </button>
        <button onClick={handleClick} id="seven">
          7
        </button>
        <button onClick={handleClick} id="eight">
          8
        </button>
        <button onClick={handleClick} id="nine">
          9
        </button>
        <button onClick={handleClick} id="subtract">
          -
        </button>
        <button onClick={handleClick} id="four">
          4
        </button>
        <button onClick={handleClick} id="five">
          5
        </button>
        <button onClick={handleClick} id="six">
          6
        </button>
        <button onClick={handleClick} id="add">
          +
        </button>
        <button onClick={handleClick} id="one">
          1
        </button>
        <button onClick={handleClick} id="two">
          2
        </button>
        <button onClick={handleClick} id="three">
          3
        </button>
        <button onClick={handleClick} id="equals">
          =
        </button>
        <button onClick={handleClick} id="zero">
          0
        </button>
        <button onClick={handleClick} id="decimal">
          .
        </button>
      </div>
    </div>
  );
}

export default App;
