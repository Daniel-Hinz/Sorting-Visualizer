export default function callMergeSort(elements) {
    let arr = elements;
    mergeSort(arr, 0, arr.length - 1);
    return arr;
}

function mergeSort(arr, left, right) {
    if(left < right) {
        let mid = left + parseInt((right - left) / 2);
  
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

function merge(arr, left, mid, right) {
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