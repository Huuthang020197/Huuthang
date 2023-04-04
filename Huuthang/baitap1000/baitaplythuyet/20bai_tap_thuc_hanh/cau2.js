function AVG(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>0) {
            sum += arr[i];
            count++
        }
    }
    if (count == 0 ) {
        return console.log("Mảng không có số dương");
    }
    return console.log("Trung bình cộng các số dương trong mảng là :", sum/count);
}
AVG([0,0,-1,-1])