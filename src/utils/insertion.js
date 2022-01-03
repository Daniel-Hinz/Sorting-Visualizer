import swap from './swap.js'

async function insertionSort(component, elements) {
    let arr = elements;
  
    for (let i = 1; i < arr.length; ++i) {
        let current = arr[i];
        let j = i-1;
  
        while ((j > -1) && (current < arr[j])) {
          swap(arr, j, j+1);
          j--;

          component.setState({ elements: arr })

          await new Promise((resolve) =>
            setTimeout(() => { resolve() }, component.state.speed )
          );
        }

      arr[j+1] = current;
    }

    document.querySelector('.completed').style.display = 'flex';
    return arr;
}

export default insertionSort;