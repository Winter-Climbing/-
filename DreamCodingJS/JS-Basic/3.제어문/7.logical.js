// 논리연산자 Logical operator
// && 그리고
// || 또는
// ! 부정 (단항연산자에서 온 것)
// !! 불리언값으로 변환 (단항연사자 응용버전)

let num = 8;
if (num >= 0 && num < 9) {
    console.log('👍');
}
let num1 = 8;
if (num1 >= 0 || num1 < 9) {
    console.log('👍');
}
let num2 = 8;
if (!(num2 >= 0 || num2 < 9)) {
    console.log('👍');
}
if (num != 9) {
    console.log('👍');
}


