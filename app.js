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

// 4-NORMATIV

// 1-misol
// let a = ['jasmina', 'muhammaddiyor', 'bek', 'yusufxon', 'asad', 'john']
// let res = a.filter((n) => n.length > 5)
// console.log(res);

// 2-misol
// let a = [2, 3, 5, 7, 3, 8, 9];
// let max = Math.max(...a);
// let min = Math.min(...a);
// let b = max - min;
// console.log(b);

// 3-misol
// let a = ["seVInCH", "IBroHim", "miRKomil", "JORABEK", "abdulaziz"];
// let res = a.map((n) => n[0].toUpperCase() + n.slice(1).toLowerCase())
// console.log(res);

// 4-misol
// let a = [16, 20, 8, 2, 12, 27, 9, 13];
// let b = a[a.length - 1];
// let res = a.find((n) => n < b) || 0;
// console.log(res);

// 5-misol
// let arr = [1, 2, 2, 3, 4, 4, 5];
// let res = arr.filter((n, i, a) => a.indexOf(n) === a.lastIndexOf(n));
// console.log(res);

// 5-NORMATIV

// 1-misol
// let obj = { 

// };
// obj.name = "Palonchi"
// obj.age = 19
// obj.country = "earth"
// console.log(obj);

// 2-misol
// let obj = { 
//     valyuta: "dollar", 
//     miqdor: 100 
// };
// let kartoshka = 2 * 10; 
// let cola = 5 * 6; 
// obj.miqdor -= (kartoshka + cola);
// console.log(obj);

// 3-misol
// let obj = { 
//     Anvar: 19, 
//     Salim: 21, 
//     Jasur: 13 
// };
// let age = Math.max(...Object.values(obj));
// console.log(age);


// 4-misol
// let obj = { name: "John", age: 22, city: "Tashkent" };
// let arr = Object.entries(obj);
// arr[1][1] = 30; 
// arr[2][1] = "New York"; 
// console.log(arr); 

// 5-misol
// ??????????

// 6-NORMATIV

// 1-misol 
// let obj = {
//     name: "John",
//     age: 22,
//     city: "Tashkent",
//     printValues: function () {
//         console.log(Object.values(this));
//     }
// };
// obj.printValues(); 

// 2-misol
// let obj = {
//     a: 15,
//     b: 10,
//     yuzasi: function () {
//         return this.a * this.b;
//     }
// };
// console.log(obj.yuzasi());

// 3-misol
// let obj = {
//     soliq: 20,
//     kamunal: 12,
//     prava: 980,
//     havo: 3,
//     qanchaKotarildi: function (foiz) {
//         Object.keys(this).forEach(key => {
//             if (typeof this[key] === "number") {
//                 this[key] *= 1 + foiz / 100;
//             }
//         });
//     }
// };
// obj.qanchaKotarildi(15);
// console.log(obj);

// 4-misol
// let obj = {
//     Salim: 50,
//     Vali: 87,
//     Ali: 12,
//     deleteUser: function (name) {
//         delete this[name];
//     }
// };
// obj.deleteUser("Vali");
// console.log(obj);

// 5-misol
// let obj = { 
//     olam: 7, 
//     mandarin: 4, 
//     banan: 6, 
//     apelsin: 1 
// };

// for (let key in obj) {
//     if (obj[key] % 2 !== 0) {
//         delete obj[key];
//     }
// }
// console.log(obj);



// Eski Normativ 

// 2.1-misol
// function a (str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str.indexOf(str[i]) !== i) { 
//             return str[i]; 
//         }
//     }
//     return null; 
// }
// console.log(a("javascript")); 
// console.log(a("frontend"));   
// console.log(a("abcdef"));    

// 2.2-misol

// let arr = [{ age: 30 }, { age: 20 }, { age: 40 }];
// arr.sort((a, b) => a.age - b.age);
// console.log(arr);


// let arr2 = [{ age: 25 }, { age: 22 }, { age: 28 }];
// arr2.sort((a, b) => a.age - b.age);
// console.log(arr2);

// let arr3 = [{ age: 50 }, { age: 10 }, { age: 40 }];
// arr3.sort((a, b) => a.age - b.age);
// console.log(arr3);

// 2.3-misol

// let start = +prompt("sonni kiriting:");
// let end = +prompt("Oxirgi sonni kiriting:");

// for (let i = start; i <= end; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// 2.4-misol
// function a(arr, value) {
//     const index = arr.indexOf(value);
//     if (index !== -1) {
//         return index;
//     } else {
//         return -1;
//     }
// }

// console.log(a([1, 5, 7, 9], 7)); 
// console.log(a([10, 20, 30], 15)); 
// console.log(a([4, 6, 8], 6)); 

// 2.5-misol
// function a(b) {
//     const reversed = b.split('').reverse().join('');
//     return b === reversed;
// }


// console.log(a("madam"));    
// console.log(a("racecar")); 
// console.log(a("hello"));   



// EXAM
// 1-misol
// function makeNegative(num) {
//     if (num > 0) {
//         console.log(-num);
//         ;
//     } else if (num < 0) {
//         console.log(num);
        
//     } else {
//         console.log(num);
        
//     };
// }

// makeNegative(5)
// makeNegative(-3)
// makeNegative(0)

// 2-misol
// function evenOrOdd(number){
//     if (number % 2 === 0 ) {
//         console.log("even");        
//     } else {
//         console.log("odd");
        
//     }
// }

// evenOrOdd(2)
// evenOrOdd(7)

// 3-misol
// function remmoveChar(str) {
//     let arr = str.split('')
//     let res = arr.slice(1, -1).join('').toString()
//     console.log(res);

        
// }
// remmoveChar("hello")
// remmoveChar("abc")

// 4-misol
// function solution(str) {
//     let arr = str.split('')
//     let res = arr.reverse(1, -1).join('').toString()
//     console.log(res);
    
    
// }
// solution("world")

// 5-misol
// function positiveSum(arr) {
//     const a = arr.filter(num => num > 0);
//     const b = a.reduce((acc, cur) => acc + cur, 0);
//     console.log(b);
// }

// positiveSum([1, -2, 3, 4, -5]);

// 6-misol
// function repeatStr(n, s) {
//     return s.repeat(n);
// }
// console.log(repeatStr(3, "ha"));


// 7-NORMATIV
// 1-misol
// let obj = { Salim: 25, Ali: 17, Malika: 21 };
// for (let key in obj) {
//     obj[key] += 2;
// }
// console.log(obj); 

// 2-misol
// let users = [
//     { name: "Ali", age: 20 },
//     { name: "Vali", age: 25 },
//     { name: "Sami", age: 22 }
// ];
// users.forEach(user => {
//     console.log(`${user.name}: ${user.age}`);
// });


// 3-misol
// let obj = { a: 10, b: "hello", c: 5, d: true };
// for (let key in obj) {
//     if (typeof obj[key] === "number") {
//         console.log(`${key}=${obj[key]}`);
//     }
// }


// 4-misol
// let person = { name: "Lola", age: null, job: "Teacher", city: null };
// for (let key in person) {
//     if (person[key] === null) {
//         delete person[key];
//     }
// }
// console.log(person); 

// 5-misol
// const users = [
//     { name: "Ali", age: 17 },
//     { name: "Vali", age: 19 },
//     { name: "Sami", age: 21 }
// ];
// const filterUsers = users.filter(user => user.age > 18);
// console.log(filterUsers);


// 8-NORMATIV
// 1-savol
// try {
//     let a = +prompt("Birinchi raqamni kiriting")
//     let b = +prompt("Ikkinchi raqamni kiriting")
//     let c = prompt("Amalni kiriting (+, -, *, /):")
//     let natija
//     if (c === "+") {
//         a + b
//     } else if (c === "-") {
//         a - b
//     } else if (c === "*") {
//         a * b
//     } else if (amal === "/") {
//         if (b === 0) {
//             throw "0 bolish mumkinmas";
//         }
//         natija = a / b;
//     } else {
//         throw "Amal notogri";
//     }
//     alert( natija);
// }
// catch (xato) {
//     alert("Xato: " + xato);
// }
// 2-savol
// let name = prompt("Ismingizni kiriting");
// let email = prompt("Emailizni kiriting");
// let age = +prompt("Yoshingizni kiriting");
// try {
//     if (name.length <= 3) {
//         console.log("Ism kamida 3 ta harf bo'lishi shart")
//     }if (!email.includes("@") || !email.includes(".")) {
//         console.log("Emailda @ va . bo'lishi shart")
//     } if (age <= 7) {
//         console.log("Yosh 7 dan katta bo'lishi shart");
//     } else {
//         alert("Muvaffaqiyatli");
//     }
// } catch (error) {
//     console.log(error.message);
// }
// 3-savol
// function checkType(num) {

//     if (Array.isArray(value)) {
//         console.log("Bu array");
//     } else if (typeof value === "string") {
//         console.log("Bu string");
//     } else if (typeof value === "number") {
//         console.log("Bu number");
//     } else if (typeof value === "boolean") {
//         console.log("Bu boolean");
//     } else if (typeof value === "object") {
//         console.log("Bu object");
//     } else {
//         console.log("Nomalum tur");
//     }
// }

// checkType(5)

// 4-savol
// const user = {
//     name: "Ali",
//     age: 25,
//     email: "ali@example.com",
//     isStudent: true
// };
// function registerUser(user) {
//     try {
//         if (typeof user.name !== 'string' || user.name.length < 3) {
//             throw new Error("Ism string bo'lishi va kamida 3 ta harfdan iborat bo'lishi kerak.");
//         } if (typeof user.age !== 'number' || user.age < 7) {
//             throw new Error("Yosh number bo'lishi va 7 yoki undan katta bo'lishi kerak.");
//         } if (typeof user.email !== 'string' || !user.email.includes('@') || !user.email.includes('.')) {
//             throw new Error("Email string bo'lishi va '@' hamda '.' belgilarini o'z ichiga olishi kerak.");
//         } if (typeof user.isStudent !== 'boolean') {
//             throw new Error("isStudent faqat boolean tipida bo'lishi kerak.");
//         }
//         console.log(`Ro'yxatdan muvaffaqiyatli o'tdingiz! Xush kelibsiz, ${user.name}!`);
//     } catch (error) {
//         console.log("Xatolik: " + error.message);
//     }
// }
// registerUser(user);
