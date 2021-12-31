import swap from './swap.js'

function selectionSort(elements) {
    let arr = elements;
  
    for (let i = 0; i < arr.length; i++)  {
        let min = i;
  
        for (let j = i+1; j < arr.length; j++)
          if (arr[j] < arr[min])
            min = j;

        swap(arr, min, i);
    }

    return arr;
}

export default selectionSort;