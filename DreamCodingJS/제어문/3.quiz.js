// 퀴즈!
let num = 2;
// 일 때 num의 숫자가 짝수이면 👍, 홀수라면 👎을 출력하도록
// if
// 삼항 연산자 ternary 를 써봐라

if (num % 2 === 0) {
    console.log('👍');
} else {
    console.log('👎');
};

num % 2 === 0 ? console.log('👍') : console.log('👎');

let emoji = num % 2 === 0 ? '👍' : '👎';
console.log(emoji);