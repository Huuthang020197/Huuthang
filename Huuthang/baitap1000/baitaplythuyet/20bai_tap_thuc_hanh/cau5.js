function CacSoTrongDoanXY(arr, x, y) {
    console.log(`Các số trong mảng thuộc đoạn ${x},${y} cho trước là: `);
    for (let i = 0; i < arr.length; i++) {
      if (x <= arr[i] && arr[i] <= y) {
        console.log(arr[i]);
      }
    }
  }
  ​
  CacSoTrongDoanXY([5, 2, 6, 1, -5, 10], 1, 9);