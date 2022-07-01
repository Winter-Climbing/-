// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능 (웬만하면 let보다 const를 쓰는 것이 좋다)
// 1. 상수
// 2. 상수변수 또는 변수

const text = 'hello';
// text = 'hi'; 이렇게 하면 안됨!

// 1. 상수 (상수는 항상 대문자를 쓰고, 띄어쓰기는 _로 처리)
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
    name: 'apple',
    color: 'red',
    display: '🍎'
};
// apple = {};
console.log(apple);
apple.name = 'orange'
apple.display = '🍏'
console.log(apple);