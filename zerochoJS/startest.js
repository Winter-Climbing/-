// for (let i = 0; i < 5; i++) {
//   console.log('*'.repeat(i + 1));
// }

// for (let i = 5; i > 0; i--) {
//   console.log('*'.repeat(i - 1));
// }

/**
 * 0 5
 * 1 4
 * 2 3
 * 3 2
 * 4 1
 * 이 관계 속에서 규칙을 찾아라
 */

// for (let i = 0; i < 5; i++) {
//   console.log('*'.repeat(5 - i));
// }

// for (let i = 1; i < 6; i++) {
//   console.log('*'.repeat(2*i - 1));
// }

for (let i = 1; i < 6; i++) {
  console.log('*'.repeat(*i - 1));
}
