import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [ buttonColor, setButtonColor ] = useState('red');
    const otherButtonColor = buttonColor === 'red' ? 'blue' : 'red';

    return (
    <div>
      <button
          style={{backgroundColor: buttonColor}}
          onClick={() => setButtonColor(otherButtonColor)}>
            Change to {otherButtonColor}
      </button>
    </div>
  );
}

export default App;
