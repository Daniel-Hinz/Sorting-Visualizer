import swap from './swap.js'

export default async function callHeapSort(component, elements) {
    let arr = elements;
    await heapSort(component, arr);
    document.querySelector('.completed').style.display = 'flex';
    return arr;
}

async function heapSort(component, arr) {  
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      heapify(component, arr, arr.length, i);

      component.setState({ elements: arr })
      await new Promise((resolve) =>
          setTimeout(() => { resolve() }, component.state.speed )
      );
    }
  
    for (let i = arr.length - 1; i > 0; --i) {
      swap(arr, 0, i);
      heapify(component, arr, i, 0);

      component.setState({ elements: arr })
      await new Promise((resolve) =>
          setTimeout(() => { resolve() }, component.state.speed )
      );
    }
  }

function heapify(component, arr, length, i) {
    var largest = i;
    var left    = 2 * i + 1;
    var right   = 2 * i + 2;
  
    if (left < length && arr[left] > arr[largest])
      largest = left;
  
    if (right < length && arr[right] > arr[largest])
      largest = right;
  
    if (largest !== i) {
      swap(arr, i, largest);
      heapify(component, arr, length, largest);
    }
}