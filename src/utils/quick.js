import swap from './swap.js'

export default function callQuickSort(elements) {
    let arr = elements;
    quickSort(arr, 0, arr.length-1);
    return arr;
}

function quickSort(arr, left, right) {
    if (left < right) {
        let pivot = partition(arr, left, right); 

        quickSort(arr, left, pivot - 1);
        quickSort(arr, pivot + 1, right);
      }
  }

function partition(arr, left, right) {
    let pivot = arr[right];
    let i = (left - 1);
  
    for (let j = left; j <= right- 1; ++j) {  
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }    
    }

    swap(arr, i+1, right);
    return (i + 1);
}