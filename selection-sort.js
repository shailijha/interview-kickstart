function selectionSort(arr) {
    // arr = arr.split('');
    // console.log(arr);
    let min = 0;
    let idx = 0;
    for(let i = 0; i < arr.length - 1; i++) {
        min = arr[i];
        idx = i;
        for(let j = i+1; j < arr.length; j++) {
            // console.log('min and arr[j]', min, arr[j]);
            if(arr[j] < min) {
                min = arr[j];
                idx = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[idx];
        arr[idx] = temp;
        // console.log(arr);
    }
    console.log(arr);
}

selectionSort([2,5,4,10,7]);