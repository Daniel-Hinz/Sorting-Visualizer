import swap from './swap.js'
 
async function bubbleSort(component, elements) { 
    let arr = elements;

    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
            if (arr[j] > arr[j+1])
                swap(arr,j,j+1);
                
            component.setState({ elements: arr })
            await new Promise((resolve) =>
                setTimeout(() => { resolve() }, component.state.speed )
            );
        }   
    }

    document.querySelector('.completed').style.display = 'flex';
}
export default bubbleSort;

