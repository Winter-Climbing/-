// typeof: 데이터 타입을 확인
// 값을 타입 문자열로 반환
let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

variable = 123; // 할당된 값에 따라 값이 변경된다
console.log(typeof variable);

variable = {}; 
console.log(typeof variable);

variable = function () {}; 
console.log(typeof variable);

variable = Symbol(); 
console.log(typeof variable);

console.log(typeof 123);
console.log(typeof '123');


// 다른 언어의 경우 (Like JAVA, 자바는 JS와 비교해서 정적이고 스트롱한 언어이다.)
// Int variable = 0;
// 라고 값을 넣을 경우 동작하기 전에 변수의 값이 0이라고 정적으로 결정되고 이후 동작