import swap from './swap.js'

export default async function callQuickSort(component, elements) {
    let arr = elements;
    await quickSort(component, arr, 0, arr.length-1);
    document.querySelector('.completed').style.display = 'flex';
    return arr;
}

async function quickSort(component, arr, left, right) {
    if (left < right) {
        let pivot = await partition(component, arr, left, right); 

        await quickSort(component, arr, left, pivot - 1);
        await quickSort(component, arr, pivot + 1, right);

        component.setState({ elements: arr })
        await new Promise((resolve) =>
            setTimeout(() => { resolve() }, component.state.speed )
        );
      }
  }

async function partition(component, arr, left, right) {
    let pivot = arr[right];
    let i = (left - 1);
  
    for (let j = left; j <= right- 1; ++j) {  
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }    

        component.setState({ elements: arr })
        await new Promise((resolve) =>
            setTimeout(() => { resolve() }, component.state.speed )
        );
    }

    swap(arr, i+1, right);

    component.setState({ elements: arr })
    await new Promise((resolve) =>
        setTimeout(() => { resolve() }, component.state.speed )
    );
    return (i + 1);
}