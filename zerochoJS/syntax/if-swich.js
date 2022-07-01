// 조건문 if는 break가 무조건 걸린다.

const score = 91;
if (score > 90) {
  console.log("A+");
} else if (score > 80) {
  console.log("A");
} else if (score > 70) {
  console.log("B");
} else if (score > 60) {
  console.log("C");
} else {
  console.log("F");
}

// swich로 표현해보자
switch (score) {
  case score > 90:
    console.log("A+");
    break;
  case score > 80:
    console.log("A");
    break;
  case score > 70:
    console.log("B");
    break;
  case score > 60:
    console.log("C");
    break;
  default:
    console.log("F");
    break;
}

let cond = true;
let value = "";
switch (cond) {
  case true:
    value = "참";
    break;
  default:
    value = "거짓";
    break;
}
console.log(value);

value = cond ? "참" : "거짓";
console.log(value);
