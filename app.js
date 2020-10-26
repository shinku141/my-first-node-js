'use strict';

// nodeから引数を受け付ける
const number = process.argv[2] || 0;

let sum = 0;

// 引数の階乗の計算
for (let i = 1; i <= number; i++) {
  sum = sum + i;
}

console.log(sum);