//  while(조건) {}
// 조건이 false가 될 때까지 {} 코드를 반복 실행
let num = 5;
while (num >= 0) {
    console.log(num);
    num--;
}

// while은 일단 true인지 false인지 판단 후 true면 출력한다.
let isActive = false;
let i = 0;
while (isActive) {
    console.log('죽지않아!');
    if (i === 100) {
        break;
    }
    i++;
}

// do while은 일단 출력한 후 boolean 판단
do {
    console.log('do-while은 죽지않아!');
} while (isActive);

// 즉 while은 조건이 맞으면 출력되게 만들 때 사용하고
// do while은 일단 한 번은 무조건 출력하고 싶을 때 사용