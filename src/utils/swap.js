function swap(arr, left, right) {
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

export default swap;