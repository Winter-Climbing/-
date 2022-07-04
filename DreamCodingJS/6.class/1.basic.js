// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (고전적 방법) 👎
// 2. 클래스 👍

//
// function Fruit(name, emoji) {
//   this.name = name;
//   this.emoji = emoji;
//   this.display = () => {
//     console.log(`${this.name}: ${this.emoji}`);
//   };
//   return this; // 생략 가능
// }

class Fruit {
  // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// apple 은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit("apple", "❤");
// orange 는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit("orange", "🎶");

console.log(apple);
console.log(orange);
