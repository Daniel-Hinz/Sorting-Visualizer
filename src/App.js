import React from 'react';
import './styles/App.css';
import { generateArray } from './utils/helpers.js'

function App() {
  return (
    <div className='App'>
      <header>
        <h1>Sorting Visualizer</h1>

        <select>
          <option value=''>Algorithm</option>
          <option value='bubble'>Bubble</option>
          <option value='selection'>Selection</option>
          <option value='insertion'>Insertion</option>
          <option value='merge'>Merge</option>
          <option value='quick'>Quick</option>
          <option value='heap'>Heap</option>
        </select>
      </header>

      <main>
        <div className='elements' id='elements'>
          { generateArray() }
        </div>

        <div className='control-panel'>
          <h4>Size of Array</h4>
          <input type='range' min='10' max='100' defaultValue='55' step='5' className='range' id='size'/>
          <h4>Speed of Process</h4>
          <input type='range' min='10' max='100' defaultValue='55' step='5' className='range'id='speed' />
          <input type='button' className='button' value='sort' />
        </div>
      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;
