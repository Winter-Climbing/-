// 매개변수 (parameters)
// 따로 작성하지 않는다면 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// 매개변수 기본값(Default Parameters a = 1, b = 1) 매개변수 기본값은 undefined일 때 많이 쓴다.
function add(a = 1, b = 2) {
    console.log(a);
    console.log(b);
    console.log(arguments);
    return;
}
add();

// Rest 매개변수 Rest Parameters
function sum(a, b, ...numbers) {
    console.log(a);
    console.log(b);
    console.log(numbers);
}
sum(1, 2, 3, 4, 5, 6, 7, 8);