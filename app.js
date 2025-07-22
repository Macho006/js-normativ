// 1-NORMATIV
// 
// 1-savol
// son = prompt("Sonni kiriting: ")

// if (son % 2 == 0){
//     console.log("Bu juft son.");
// } else{
//     console.log("Bu toq son.");
// }

//  2-savol
// let son = +prompt("Sonni kiriting: ")

// if (son > 0){
//     console.log("musbat");
// } else if (son == 0) {
//      console.log("0ga teng");    
// } else{
//     console.log("manfiy");
// }

//  3-savol
// let a = +prompt("a sonni kiriting")
// let b = +prompt("b sonni kiriting")

// function sum() {
//     if (a > b) {
//         console.log("a son b sondan kotta");
//     } else if (a == b) {
//         console.log("a son b songa teng");
//     } else {
//         console.log("b son a sondan kotta");
//     }
// }
// sum()

// 4-savol
// let ball = prompt("Talabaning olgan balini kiriting");

// if (ball >= 1 && ball <= 59) {
//     console.log("Talabaning bahosi 2, imtihondan otmadi");
// } else if (ball >= 60 && ball <= 69) {
//     console.log("Talabaning bahosi 3, imtihondan otdi");
// } else if (ball >= 70 && ball <= 89) {
//     console.log("Talabaning bahosi 4, imtihondan otdi");
// } else if (ball >= 90 && ball <= 100) {
//     console.log("Talabaning bahosi 5, imtihondan otdi");
// } else {
//     console.log("Noto'g'ri ball kiritildi!");
// }

// 5-savol
// function tekshiruv() {
//     const togriLogin = "ustudy2025";
//     const togriParol = "U9frontend";

//     const login = prompt("Loginni kiriting:");
//     const parol = prompt("Parolni kiriting:");

//     if (login === togriLogin && parol === togriParol) {
//         console.log("Muvaffaqiyatli");
//     } else if (login !== togriLogin && parol === togriParol) {
//         console.log("Kiritilgan login xato");
//     } else if (login === togriLogin && parol !== togriParol) {
//         console.log("Kiritilgan password xato");
//     } else {
//         console.log("Kiritilgan login va password xato");
//     }
// }

// tekshiruv();



// 2-NORMATIV

// 1-misol
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// 2-misol
// let n = +prompt("sonni kiriting")
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//     sum += i;
// }

// console.log(sum);

// 3-misol
// let arr = [7, -8, 2, 6, 9, -4, 12, 3, -11, 18];
// let sum = 0;

// for (let num of arr) {
//   if (num > 0 && num % 2 === 0) {
//     sum += num;
//   }
// }

// console.log(sum);

// 4-misol
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i);
//     }
// }

// 5-misol
// let arr = [2, -8, 2, 1, 5, 4, -15, 9, 13];

// let max = arr[0];
// let min = arr[0];

// for (let num of arr) {
//   if (num > max) max = num;
//   if (num < min) min = num;
// }

// console.log("Kattasi:", max + ".", "Kichigi:", min);

// 3-NORMATIV
// 1-misol

// let a = [3, 8, 9, 7, 5];
// let b = a.pop();
// let c = b ** 2;
// a.unshift(c);

// console.log(a);

// 2-mislo
// let a = [2, 8, 9, 1, 15, 3, 0, 5]
// let juft = a.filter((n) => n % 2 === 0)
// let res = juft.reduce((acc, cur) => acc + cur)

// console.log(res);

// 3-misol
// let a = [2, -8, 9, 1, -15, 3, 0, 5]
// let res = a.filter((n) => n > 0).reduce((acc, cur) => acc * cur);
// console.log(res);

// 4-misol

// let a = [6,1,3,5,6,2,0,4]
// let res = a.sort((a, b) => a -b).filter((n) => n > 2).map((num) => num ** 2)
// console.log(res);


// 5-misol
// let a = [1, [2, 3], [4, [5, 6, 7]]]
// let b = a.flat(2)
// let res = b.filter((n) => n % 2 !== 0)
// console.log(res);


