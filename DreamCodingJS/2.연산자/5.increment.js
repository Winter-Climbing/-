// 증가 & 감소 연산자 Increment & Decremenet Operators
let a = 0;
console.log(a);
a++; // a = a + 1; 
console.log(a); // 1
a--; // a = a - 1;
console.log(a); // 0

console.clear();
// 주의!!
// a++ 는 필요한 연산을 하고, 그 뒤 값을 증가시킴
// ++a 는 값을 먼저 증가하고, 필요한 연산을 함
a = 0;
console.log(a++);
console.log(a);
let b = a++; // ++a라고 작성하면 1,1 이 나온다.
console.log(b);
console.log(a);