// 반복문 Loop Statement
// for (변수선언문; 조건식; 증감식) {}
// 실행순서:
// 1. 변수선언문을 선언해서 변수를 초기화
// 2. 조건식의 값이 참이면 {} 코드블럭을 수행
// 3. 증감식을 수행
// 4. 조건식이 거짓이 될 때까지 2번과 3번을 반복함

// 0에서 5까지
for(let i = 0; i < 5; i++) {
    console.log(i);
}

// 0부터 5사이에 있는 짝수
for(let i = 0; i < 5; i += 2) {
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
    console.log(i, j);
    }
}

// // 무한루프 - 똥이다 루프는 언젠가는 false로 떨어져서 루프가 종료되도록 만들어야 한다.
// for(;;) {
// }

// 반복문 제어: continu, break;
for(let i = 0; i < 20; i++) {
    if(i === 10) {
        continue;
        console.log('i가 드디어 10이 되었다!');
        break;
    }
    console.log(i);
}

