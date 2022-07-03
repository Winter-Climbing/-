// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 5를 전달하고, 순회하는 숫자를 다 출력하고 싶음
// 최댓값 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// function iterate(max, action)

// function sum(a, b, ...numbers) {
//     console.log(a);
//     console.log(b);
//     console.log(numbers);
// }
// sum(1, 2, 3, 4, 5);

// let multiply = (a) => (a * 2);  

// function iterate(max, action) {
//     let result = action(a, b, ...numbers);
//     console.log(result);
//     return result;
// }

// iterate(1, 2, 3, 4, 5, multiply);




// const tnsghks = (max) => {
//     for (let i = 0; i <= 5; i++) {
//         console.log(i);
//     }
// }

// const tmi = Math.max(1, 2, 3, 4, 5);
// console.log(tmi);

// function iterate(max, action) {
//     let result = action(max)
//     console.log(result);
//     return result;
// }

function iterate(max, action) {
    for (let i = 0; i < max; i++) {
        action(i);
    }
}

console.log();