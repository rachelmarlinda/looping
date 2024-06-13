// 1. tolong tambahin elemen array nama2 artis malih
let artisIndo = ["anjasmara", "melly", "ahmad dhani"];
// 2. ganti melly jadi bcl
// 3. ubah array tersebut menjadi string

artisIndo.splice (1, 1, "bunga citra lestari");
console.log(artisIndo);

let transformer = artisIndo.join();
console.log(transformer);

let result = artisIndo.toString();
console.log(result);