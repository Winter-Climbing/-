// 조건문 Conditional Statement
// if(조건) {}
// if(조건) {} else {}
// if(조건1) {} else if{조건2} {} else {}
let fruit = 'apple';
// fruit = 'orange';
// fruit = 'orae';
if (fruit === 'apple') {
    console.log('🍎')
} else if(fruit === 'orange') {
    console.log('🍊');
} else {
    console.log('😋')
};

// 조건문이 출력되지 않으려면 조건 () 속에 false에 해당하는 값이 들어가야 한다. 따라서 false, 0, '', null, undefinded는 출력되지 않는다.
if (0) {
    console.log('출력되면 안됨!');
}
// 이런 식으로 true와 false를 제어해서 사용할 수도 있다.
if (2 > 1) {
    console.log('출력되면 안됨!');
};