// Object Literal { key: value}
// new Object()
// Object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 (함수)

let apple = {
  name: "apple", // 사실 이렇게 문자로만 작성하고 밑의 방법으로는 잘 사용하지 않는다
  hello: "👍",
  0: 1,
  ["hello-bye"]: "👍",
};

// 속성, 데이터에 접근하기 위해서는
console.log(apple.name); // 마침표 표기법 dot notation
console.log(apple["hello-bye"]); // 대괄호 표기법 bracket notation
console.log(apple["name"]);

// 속성 추가
apple.emoji = "👌";
console.log(apple.emoji);
console.log(apple["emoji"]);

// 속성 삭제
delete apple.emoji;
