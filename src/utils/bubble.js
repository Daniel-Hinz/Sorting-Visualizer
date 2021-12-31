import swap from './swap.js'
 
function bubbleSort(arr, n) {
    console.log("bubble");
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) 
                swap(arr,j,j+1);
        }   
    }
}

export default bubbleSort;

