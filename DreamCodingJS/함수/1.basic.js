// 사용예제 1
function sum(a, b) {
    console.log('function');
    return a + b;    
}
const result = sum(1, 2);
console.log(result);

// 사용예지 2
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
let lastName = '김';
let firstName = '지수';
console.log(fullName(firstName, lastName));

let lastName2 = '구';
let firstName2 = '본현';
console.log(fullName(firstName2, lastName2));