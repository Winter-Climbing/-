const func = () => {
  const a = 1;
  const b = 2;
  console.log(a + b);
};
func();

function dl() {
  const l = 1;
  const i = 2;
  console.log(l + i);
};
dl();

const v = function () {
  const e = 1;
  const r = 2;
  console.log(e + r);
};
v();

function o(x, y, z, w) {
  console.log(x, y, z, w);
  console.log(arguments);
}

o('Hello', 'My', 'World');


// 화살표 함수는 return과 중괄호가 생략될 수 있다.
const f = (x, y, z) => x * y * z;
const m = (x, y, z) => x * y * z;

f(2, 2, 3);

const gop = (x, y, z) => x * y * z;
gop(4, 4, 4);