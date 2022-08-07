function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

function log(num) {
  console.log(num);
}

function double(num) {
  console.log(num * 2);
}
iterate(3, double);

// 예제
setTimeout(() => {
  console.log("1초뒤 이 함수가 실행될거에요");
}, 1000);
