import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [ buttonColor, setButtonColor ] = useState('red');
    const [ buttonIsDisabled, setButtonIsDisabled ] = useState(false);
    const otherButtonColor = buttonColor === 'red' ? 'blue' : 'red';

    return (
        <div>
          <button
              style={{backgroundColor: buttonColor}}
              disabled={buttonIsDisabled}
              onClick={() => setButtonColor(otherButtonColor)}>
                Change to {otherButtonColor}
          </button>
            <input
                type={'checkbox'}
                id={'disable-button-checkbox'}
                onClick={() => setButtonIsDisabled(!buttonIsDisabled)}
            />
            <label htmlFor={'disable-button-checkbox'}>Disable Button</label>
        </div>
  );
}

export default App;
