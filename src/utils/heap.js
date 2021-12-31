import swap from './swap.js'

export default function callHeapSort(elements) {
    let arr = elements;
    heapSort(arr);
    return arr;
}

function heapSort(arr) {  
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      heapify(arr, arr.length, i);
    }
  
    for (let i = arr.length - 1; i > 0; --i) {
      swap(arr, 0, i);
      heapify(arr, i, 0);
    }
  }

function heapify(arr, length, i) {
    var largest = i;
    var left    = 2 * i + 1;
    var right   = 2 * i + 2;
  
    if (left < length && arr[left] > arr[largest])
      largest = left;
  
    if (right < length && arr[right] > arr[largest])
      largest = right;
  
    if (largest !== i) {
      swap(arr, i, largest);
      heapify(arr, length, largest);
    }
}