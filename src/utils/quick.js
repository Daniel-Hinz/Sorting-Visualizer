import swap from './swap.js'

export default async function callQuickSort(component, elements, speed) {
    let arr = elements;
    await quickSort(component, arr, 0, arr.length-1, speed);
    document.querySelector('.completed').style.display = 'flex';
    return arr;
}

async function quickSort(component, arr, left, right, speed) {
    if (left < right) {
        let pivot = await partition(component, arr, left, right, speed); 

        await quickSort(component, arr, left, pivot - 1, speed);
        await quickSort(component, arr, pivot + 1, right, speed);

        component.setState({ elements: arr })
        await new Promise((resolve) =>
            setTimeout(() => { resolve() }, speed )
        );
      }
  }

async function partition(component, arr, left, right, speed) {
    let pivot = arr[right];
    let i = (left - 1);
  
    for (let j = left; j <= right- 1; ++j) {  
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }    

        component.setState({ elements: arr })
        await new Promise((resolve) =>
            setTimeout(() => { resolve() }, speed )
        );
    }

    swap(arr, i+1, right);

    component.setState({ elements: arr })
    await new Promise((resolve) =>
        setTimeout(() => { resolve() }, speed )
    );
    return (i + 1);
}