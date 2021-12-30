import React from 'react';
import bubbleSort from '../utils/bubble.js'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            elements: Array.from({length: 50}, () => Math.floor(Math.random() * 90) + 10),
            speed: 0,
        };
    }

    render() {
        return (
            <div className='Main'>
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
                    <div className='elements'> {
                        this.state.elements.map((element, i) => 
                            <div    className = 'element' 
                                    style = {{ height: element + '%', width: 100 / this.state.elements.length + '%' }} 
                                    key = {i}>        
                            </div>
                        )}
                    </div>

                    <div className='control-panel'>
                        <h4>Size of Array</h4>
                        <input  type='range' min='5' max='95' defaultValue='50' 
                                step='5' className='range' id='size' 
                                onChange={(e) => { 
                                    this.setState({
                                        elements: Array.from({length: e.target.value}, () => Math.floor(Math.random() * 90) + 10)  
                                    });
                                 }}
                        />
                        
                        <h4>Speed of Process</h4> 
                        <input  type='range' min='10' max='490' defaultValue='250' 
                                step='5' className='range'id='speed'
                                onChange={(e) => { 
                                    this.setState({speed : e.target.value})
                                }}
                        />
                        
                        <input type='button' className='button' value='sort' />
                    </div>
                </main>
            </div>
        )
    }
}

export default Main;