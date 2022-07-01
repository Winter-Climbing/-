// 삼항 조건 연산자 (Ternary Operator)
// 조건식 ? 참인경우 : 거짓인경우
let fruit = 'apple'
if (fruit === 'apple') {
    console.log('🍎')
} else {
    console.log('😋')
};
// 조건문이 참인경우와 거짓인경우로 간단하게 나뉠 때는 위 조건문을 아래처럼 바꿀 수 있다.
fruit === 'apple' ? console.log('🍎') : console.log('😋');
// fruit의 값과 타입이 'apple'이라면 🍎가 그렇지 않다면 😋이 출력되라는 뜻

let emoji = fruit === 'apple' ? '🍎' : '😋';
console.log(emoji);
// 메모리에 emoji 변수를 선언하고 변수값이 fruit인데 fruit의 값과 타입이 문자열 apple과 같다면 '🍎'를 아니라면 '😋'를 출력하라