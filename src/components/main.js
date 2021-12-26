import React from 'react';
import bubbleSort from '../utils/bubble.js'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            size: 55,
            speed: 250
        };
    }

    render() {
        this.elements = []

        for (let i = 0; i < this.state.size; ++i) {
            let element = {
                height : ((Math.random() * 90) + 10 + "%"),
                width : (100 / this.state.size + "%")
            }
            this.elements.push(element);
        }
    
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
                        this.elements.map((element, i) => 
                            <div className='element' style={{height: element.height, width: element.width}} key={i}></div>
                        )}
                    </div>

                    <div className='control-panel'>
                        <h4>Size of Array</h4>
                        <input type='range' min='10' max='100' defaultValue='55' step='5' className='range' id='size' onChange={(e) => { this.setState({size : e.target.value}) }}/>
                        <h4>Speed of Process</h4> 
                        <input type='range' min='10' max='490' defaultValue='250' step='5' className='range'id='speed' onChange={(e) => { this.setState({speed : e.target.value}) }}/>
                        <input type='button' className='button' value='sort' onClick={ this.sortArray } />
                    </div>
                </main>
            </div>
        )
    }
}

export default Main;