// 创建一个Buffer
// const buf1 = Buffer.alloc(10)
// console.log(buf1);



// // 创建一个Buffer
// const buf2 = Buffer.alloc(10, 1)
// console.log(buf2);

// // 创建一个Buffer
// const buf3 = Buffer.allocUnsafe(10)
// console.log(buf3);

// // 创建一个Buffer
// const buf4 = Buffer.from('hello')
// console.log(buf4);

// 创建一个Buffer
const buf5 = Buffer.from('hello', 'utf8')
console.log(buf5);

console.log(buf5.toString());