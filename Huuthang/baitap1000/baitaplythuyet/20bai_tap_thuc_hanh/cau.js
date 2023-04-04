function Sum(arr) {
    let sum = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i]> arr[i-1]) {
            sum += arr[i]
        }
    }
    return console.log(sum);
}