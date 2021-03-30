function bubbleSort(a) {
    let n = a.length;
    for(let i = 1; i < n; i++) {
        for(let j = n-1; j >= i; j--) {
            if(a[j-1] > a[j]) {
                let temp = a[j-1];
                a[j-1] = a[j];
                a[j] = temp;
            }
            // console.log('temporary sorted array ', a);
        }
        // console.log('temporary sorted array1 ', a);
    }
    console.log(a);
}

bubbleSort([5,4,10,7,2]);