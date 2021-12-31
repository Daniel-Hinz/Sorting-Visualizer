import swap from './swap.js'

function insertionSort(elements) {
    let arr = elements;
  
    for (let i = 1; i < arr.length; ++i) {
        let current = arr[i];
        let j = i-1;
  
        while ((j > -1) && (current < arr[j])) {
          swap(arr, j, j+1);
          j--;
        }

      arr[j+1] = current;
    }
    
    return arr;
}

export default insertionSort;