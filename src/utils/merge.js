export default async function callMergeSort(component, elements) {
    let arr = elements;
    await mergeSort(component, arr, 0, arr.length - 1);
    document.querySelector('.completed').style.display = 'flex';
    return arr;
}

async function mergeSort(component, arr, left, right) {
    if(left < right) {
        let mid = left + parseInt((right - left) / 2);
  
        await mergeSort(component, arr, left, mid);
        await mergeSort(component, arr, mid + 1, right);
        await merge(component, arr, left, mid, right);

        component.setState({ elements: arr })

        await new Promise((resolve) =>
          setTimeout(() => { resolve() }, component.state.speed )
        );
    }
}

async function merge(component, arr, left, mid, right) {
    let n1 = mid - left + 1;
    let n2 = right - mid;

    let leftArr  = new Array(n1);
    let rightArr = new Array(n2);

    for (let i = 0; i < n1; i++)
      leftArr[i] = arr[left + i];

    for (let j = 0; j < n2; j++)
      rightArr[j] = arr[mid + 1 + j];

    let i = 0, j = 0, k = left;

    while (i < n1 && j < n2) {
      if (leftArr[i] <= rightArr[j]) {
          arr[k] = leftArr[i];
          i++;
      } else {
          arr[k] = rightArr[j];
          j++;
      }
      k++;

      component.setState({ elements: arr })
      await new Promise((resolve) =>
        setTimeout(() => { resolve() }, component.state.speed )
      );
    }

    while (i < n1) {
      arr[k] = leftArr[i];
      i++;
      k++;
    }

    while (j < n2) {
      arr[k] = rightArr[j];
      j++;
      k++;
    }
}