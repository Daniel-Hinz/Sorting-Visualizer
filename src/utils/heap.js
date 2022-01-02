import swap from './swap.js'

export default function callHeapSort(component, elements, speed) {
    let arr = elements;
    heapSort(component, arr, speed);
    return arr;
}

async function heapSort(component, arr, speed) {  
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      heapify(component, arr, arr.length, i, speed);

      component.setState({ elements: arr })
      await new Promise((resolve) =>
          setTimeout(() => { resolve() }, speed )
      );
    }
  
    for (let i = arr.length - 1; i > 0; --i) {
      swap(arr, 0, i);
      heapify(component, arr, i, 0, speed);

      component.setState({ elements: arr })
      await new Promise((resolve) =>
          setTimeout(() => { resolve() }, speed )
      );
    }
  }

function heapify(component, arr, length, i, speed) {
    var largest = i;
    var left    = 2 * i + 1;
    var right   = 2 * i + 2;
  
    if (left < length && arr[left] > arr[largest])
      largest = left;
  
    if (right < length && arr[right] > arr[largest])
      largest = right;
  
    if (largest !== i) {
      swap(arr, i, largest);
      heapify(component, arr, length, largest, speed);
    }
}