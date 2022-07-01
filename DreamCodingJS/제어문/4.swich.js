// 조건문 Conditional Statement
// switch
// if else if else if else .... else
// 정해진 범위 안의 값에 대해 특정한 일을 해야 하는 경우 (한 주)
let day = 7;
let dayName;
// if (day === 0) {
//     dayName = '월요일'
// } else if (day === 1) {
//     dayName = '화요일'
// } else if (day === 2) {
//     dayName = '수요일'
// } else if (day === 3) {
//     dayName = '목요일'
// } else if (day === 4) {
//     dayName = '금요일'
// } else if (day === 5) {
//     dayName = '토요일'
// } else if (day === 6) {
//     dayName = '일요일'
// } else if (day > 6) {
//     dayName = '해당하는 요일이 없음'
// }
// console.log(dayName);

switch(day) {
    case 0:
        dayName = '월요일';
        break;
    case 1 :
        dayName = '화요일';
        break;
    case 2 :
        dayName = '수요일';
        break;
    case 3 :
        dayName = '목요일';
        break;
    case 4 :
        dayName = '금요일';
        break;
    case 5 :
        dayName = '토요일';
        break;
    case 6 :
        dayName = '일요일';
        break;
    default:
        console.log('해당하는 요일이 없음!');
}
console.log(dayName);

// break를 사용하지 않아야 하는 경우
let condition = 'okay'; // okay, good -> 좋음!, bad -> 나쁨!
switch (condition) {
    case 'okay' :
    case 'good' :
        text = '좋음!';
        break;
    case 'bad' :
        text = '나쁨!';
        break; 
};
console.log(text);
// 같은 case로 묶을 경우 필요한 곳까지 하나로 묶어서 break 작성