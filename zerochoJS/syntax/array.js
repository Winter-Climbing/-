// a라는 배열의 마지막 요소를 length를 이용해 찾아 보자.
const a = ['a', 'b', 'c', 'd', 'e']
console.log(a[a.length - 2]);


// 마지막에서 3번째 요소를 찾자
const e = [1, 2, '3', '4', '5']
console.log(e.length - 2);

// shift 와 unshift
a.unshift('칠')
console.log(a);

// pop 과 push
a.push('o')
console.log(a);

const b = [0, 1, 2, 3, 4, 5]
b.includes(1); // true
b.indexOf(3); // 4
b.lastIndexOf(3); // 4

const target = ['가', '나', '다', '라', '마'];
let i = 0;
while (i < target.length) {
  console.log(target[i]);
  i++;
}

for (i = 0; i < 5; i++) {
  console.log(target[i]);
}

console.clear();

const arr = ['가', '라', '다', '라', '마', '라'];

// arr.splice(1, 1);
// arr.splice(2, 1);
// arr.splice(3, 1);
// console.log(arr);
const result = arr.indexOf('라');
console.log();


for (i = 0; i < 3; i++) {
  arr.splice(i + 1, 1);
}
console.log(arr);

while (arr.indexOf('라') > -1) {
  arr.splice(arr.indexOf('라'), 1)
}

console.log(arr);