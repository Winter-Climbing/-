// for (i = 0; i < 100; i++) {
//   console.log('hello');
// }

// let i = 0;
// while (i < 10) {
//   console.log('hello');
//   i++;
// }

// for (i = 0; i < 100; i++) {
//   console.log(i + 1);
// }

// let i = 0;
// while (true) {
//   console.log(i);
//   if (i===5) break;
//   i++;
// }

// for (i = 0; i < 10; i++) {
//   if (i % 2 === 0) continue; 
//   for (j = 0; j <10; j++) {
//     if (j % 2 === 0) continue;
//     for (k = 0; k < 10; k++) {
//       if (k % 2 === 0) continue;
//       console.log(i, j, k);
//     }
//   }
// }

// for (i = 1; i < 10; i++) {
//   console.log(i = i*9);
// }

// let a = 1;
// let b = a * a
// while (a < 10) {
//   console.log(b);
//   if (a == 1) break;
// }

for (let i = 1; i < 10; i++) {
  if (i % 2 === 0) continue;
  for (let j = 1; j < 10; j++) {
    if (j % 2 === 0) continue;
    console.log(i, j, i * j);
  }
}