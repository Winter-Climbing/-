// 동등 비교 관계 연산자 (Equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름
console.log(2 == 2);
console.log(2 !== 2);
console.log(2 == '2');
console.log(2 === '2'); // 😄 좀 더 엄격하기에 현업에서 많이 쓴다
console.log(2 !== '2');
console.log(true == 1);
console.clear();

const obj1 = {
    name : 'js',
};
const obj2 = {
    name : 'js',
};

console.log(obj1 == obj2);
console.log(obj1 === obj2);
console.log(obj1.name == obj2.name);
console.log(obj1.name === obj2.name);

let obj3 = obj2;
console.log(obj3 == obj2);
console.log(obj3 === obj2);