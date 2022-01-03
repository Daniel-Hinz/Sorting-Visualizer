import swap from './swap.js'

async function selectionSort(component, elements) {
    let arr = elements;
  
    for (let i = 0; i < arr.length; i++)  {
        let min = i;
  
        for (let j = i+1; j < arr.length; j++) {
          if (arr[j] < arr[min])
            min = j;
        
            await new Promise((resolve) =>
                setTimeout(() => { resolve() }, component.state.speed )
            );
        }

        swap(arr, min, i);
        component.setState({ elements: arr })
    }

    document.querySelector('.completed').style.display = 'flex';
    return arr;
}

export default selectionSort;