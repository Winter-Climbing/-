// 함수 선언문 function name() {}
// 함수 표현식 const name = funtion () {}

let add = function (a, b) {
    return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => {}
let sum = (a, b) => {
    return a + b;
}
console.log(sum(1, 2));

let plus = (a, b) => a + b;
console.log(plus(1, 2));

// 생성자 함수 const objiect = new Function(); // 뒤 객체편에서 다룸

// IIFE (Immedicately-Invoked Function Expressions) 잘 사용되지는 않고 웹 상에서 내가 만든 걸 바로 표현해보고 싶을 때 자주 사용
(function run() {
    console.log('👶');
})();