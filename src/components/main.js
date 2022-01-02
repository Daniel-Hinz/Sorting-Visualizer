import React from 'react';
import bubbleSort from '../utils/bubble.js'
import insertionSort from '../utils/insertion.js'
import selectionSort from '../utils/selection.js'
import callMergeSort from '../utils/merge.js'
import callQuickSort from '../utils/quick.js'
import callHeapSort from '../utils/heap.js'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            algorithm: "",
            size: 0,
            elements: Array.from({length: 50}, () => (Math.random() * 90) + 10),
            speed: 250,
            finished: false
        };
    }   

    render() {
        return (
            <div className='Main'>
                <header>
                    <h1>Sorting Visualizer</h1>

                    <select onChange={(e) => { 
                        this.setState({algorithm : e.target.value})
                    }}> 
                        <option value=''>Algorithm</option>
                        <option value='Bubble Sort'>Bubble Sort</option>
                        <option value='Selection Sort'>Selection Sort</option>                        
                        <option value='Insertion Sort'>Insertion Sort</option>                       
                        <option value='Merge Sort'>Merge Sort</option>                        
                        <option value='Quick Sort'>Quick Sort</option>                        
                        <option value='Heap Sort'>Heap Sort</option>                    
                    </select>

                    <i className="fas fa-chevron-down"></i>
                </header>
                
                <main>
                    <div className='completed'>
                        <p>{this.state.algorithm} Completed</p>
                         <input type='button' value='Reset' className='reset-button' onClick={() => {
                            document.querySelector('.completed').style.display = 'none';
                            let size = this.state.elements.length;
                            this.setState({
                                elements: Array.from({length: size}, () => (Math.random() * 90) + 10)  
                            }
                            );
                         }}/>
                    </div>

                    <div className='elements'> {
                        this.state.elements.map((element, i) => 
                            <div className = 'element' 
                                 style = {{ height: element + '%', width: 100 / this.state.elements.length + '%' }} 
                                 key = {i}>        
                            </div>
                        )}
                    </div>

                    <div className='control-panel'>
                        <h4>Size of Array</h4>
                        <input  type='range' min='5' max='95' defaultValue='50' 
                                step='5' className='size range' id='size'
                                onChange={(e) => { 
                                    this.setState({
                                        elements: Array.from({length: e.target.value}, () => (Math.random() * 90) + 10)  
                                    });
                                 }}
                        />
                        
                        <h4>Speed of Process</h4> 
                        <input  type='range' min='10' max='490' defaultValue='250' 
                                step='5' className='speed range'id='speed'
                                onChange={(e) => { 
                                    this.setState({speed: e.target.value})
                                }}
                        />
                        
                        <input  type='button' className='button' value='sort' onClick={() => {
                                switch(this.state.algorithm) {
                                    case 'Bubble Sort': 
                                        bubbleSort(this, this.state.elements, this.state.speed);
                                        break;

                                    case 'Selection Sort': 
                                        selectionSort(this, this.state.elements, this.state.speed);
                                        break;

                                    case 'Insertion Sort': 
                                        insertionSort(this, this.state.elements, this.state.speed);
                                        break;
                                        
                                    case 'Merge Sort': 
                                        callMergeSort(this, this.state.elements, this.state.speed);
                                        break;

                                    case 'Quick Sort': 
                                        callQuickSort(this, this.state.elements, this.state.speed);
                                        break;

                                    case 'Heap Sort': 
                                        callHeapSort(this, this.state.elements, this.state.speed);
                                        break;

                                    default: alert('please select a sorting algorithm') 
                                }
                            }}
                        />
                    </div>
                </main>
            </div>
        )
    }
}

export default Main;