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

//       EXAM
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

// 7-misol
// function getMiddle(s) {
//     let len = s.length;
//     let middle = Math.floor(len / 2);
  
//     if (len % 2 === 0) {
//       return s[middle - 1] + s[middle]; 
//     } else {
//       return s[middle]; 
//     }
//   }
  
//   console.log(getMiddle("test"));    
//   console.log(getMiddle("testing")); 

// 8-misol
// function findShort(s) {
//     return Math.min(...s.split(" ").map(word => word.length));
//   }
  
//   console.log(findShort("I love JavaScript frontend")); 
//   console.log(findShort("Simple and easy tasks")); 

// 9-misol
// function accum(s) {
//     return s
//       .split("")
//       .map((char, i) => char.toUpperCase() + char.toLowerCase().repeat(i))
//       .join("-");
//   }
//   console.log(accum("abcd"));    
//   console.log(accum("RqaEzty")); 

// 10-misol
// function descendingOrder(n) {
//     return parseInt(String(n).split("").sort((a, b) => b - a).join(""));
//   }
  
//   console.log(descendingOrder(42145));   
//   console.log(descendingOrder(145263));  



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



// 9-NORMATIV

// 1-savol
// function myForEach(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         callback(array[i], i, array);
//     }
// }

// const nums = [10, 20, 30];

// myForEach(nums, function(item, index, arr) {
//     console.log(`Index: ${index}, Value: ${item}, Array: [${arr}]`);
// });

// 2-savol
// function myFind(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i], i, array)) {
//             return array[i];
//         }
//     }
//     return undefined;
// }

// const nums = [5, 12, 8, 13, 14];
// const found = myFind(nums, x => x > 10);
// console.log(found);

// 3-savol
// function mySome(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i], i, array)) {
//             return true;
//         }
//     }
//     return false;
// }

// function myEvery(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         if (!callback(array[i], i, array)) {
//             return false;
//         }
//     }
//     return true;
// }

// const nums = [1, 2, 3, 4, 5];

// console.log(mySome(nums, x => x > 4));  
// console.log(myEvery(nums, x => x > 0));


// 10-NORMATIV Async
// 1-misol

// async function fn() {
//   try {
//     const title = await fetch("https://api.escuelajs.co/api/v1/products");
//     const data = await title.json();
//     data.forEach((n) => console.log(n.title));
//   } catch (error) {
//     alert(error.message); 
//   }
// }
// fn();

// 2-misol

// async function fn(params) {
//     try {
//         const user = await fetch("https://api.escuelajs.co/api/v1/categories")
//         const data = await user.json()
//         data.forEach((n) => console.log(n.user));
//     } catch (error) {
//         alert(error.message)
//     }
// }
// fn()

// 3-misol 

// async function fn(params) {
//     try {
//         const name = await fetch("https://api.escuelajs.co/api/v1/categories")
//         const data = await name.json()
//         data.forEach((n) => console.log(n.name));
//     } catch (error) {
//         alert(error.message)
//     }
// }
// fn()

// 11-NORMATIV DOM
// 1-vazifa
// let colorBox = document.getElementById("colorBox");
// colorBox.style.width = "100px";
// colorBox.style.height = "100px";
// colorBox.style.backgroundColor = "lightgray";
// colorBox.style.marginTop = "10px";

// document.getElementById("colorBtn").addEventListener("click", function () {
//   colorBox.style.backgroundColor = "green";
// });

// 2-vazifa
// let hoverText = document.getElementById("hoverText");
// hoverText.style.cursor = "pointer";
// hoverText.addEventListener("mouseover", function () {
//   hoverText.style.color = "red";
// });
// hoverText.addEventListener("mouseout", function () {
//   hoverText.style.color = "black";
// });

// 3-vazifa
// let classBox = document.getElementById("classBox");
// classBox.style.padding = "10px";
// classBox.style.margin = "10px 0";

// document.getElementById("toggleClassBtn").addEventListener("click", function () {
//   if (classBox.style.border) {
//     classBox.style.border = "";
//   } else {
//     classBox.style.border = "2px solid blue";
//   }
// });

// 4-vazifa
// let image = document.getElementById("image");
// image.style.marginTop = "10px"; 
// image.style.width = "200px";

// document.getElementById("imgBtn").addEventListener("click", function () {
//   if (image.style.display === "none") {
//     image.style.display = "block";
//   } else {
//     image.style.display = "none";
//   }
// });

// 5-vazifa
// let textInput = document.getElementById("textInput");
// textInput.style.padding = "5px";
// textInput.style.fontSize = "16px";

// textInput.addEventListener("input", function () {
//   if (textInput.value.length < 5) {
//     textInput.style.border = "2px solid red";
//   } else {
//     textInput.style.border = "2px solid green";
//   }
// });

// 6-vazifa
// let multiColorBox = document.getElementById("multiColorBox");
// multiColorBox.style.width = "100px";
// multiColorBox.style.height = "100px";
// multiColorBox.style.backgroundColor = "lightgray";
// multiColorBox.style.marginTop = "10px";

// let buttons = document.querySelectorAll(".colorBtn");
// buttons.forEach(function (btn) {
//   btn.style.marginRight = "5px";
//   btn.addEventListener("click", function () {
//     let color = btn.getAttribute("data-color");
//     multiColorBox.style.backgroundColor = color;
//   });
// });

// 7-vazifa
// document.getElementById("darkModeBtn").addEventListener("click", function () {
//   if (document.body.style.backgroundColor === "black") {
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";
//   } else {
//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "white";
//   }
// });


// 8-NORMATIV
// 1-savol
// try {
//     let num1 = +prompt("Birinchi sonni kiriting:");
//     let amal = prompt("Amalni kiriting (+, -, *, /):");
//     let num2 = +prompt("Ikkinchi sonni kiriting:");
//     let natija;
  
//     if (amal == "+") {
//       natija = num1 + num2;
//     } else if (amal == "-") {
//       natija = num1 - num2;
//     } else if (amal == "*") {
//       natija = num1 * num2;
//     } else if (amal == "/") {
//       if (num2 == 0) throw "0 ga bolish mumkin emas!";
//       natija = num1 / num2;
//     } else {
//       throw "Notogri amal kiritdingiz!";
//     }
  
//     alert("Natija: " + natija);
  
//   } catch (xato) {
//     alert("Xatolik: " + xato);
//   }
  
  
// // 2-savol
// function royxatdanOtish(ism, email, yosh) {
//     try {
//       if (ism.length < 3) throw "Ism kamida 3 ta harf bolishi kerak!";
//       if (!email.includes("@") || !email.includes(".")) throw "Email notogri!";
//       if (yosh <= 7) throw "Yosh 7 dan katta bolishi kerak!";
  
//       console.log("Royxatdan muvaffaqiyatli otdingiz");
//     } catch (xato) {
//       console.error("Xatolik: " + xato);
//     }
//   }
//   royxatdanOtish("Ali", "ali@gmail.com", 15);
  
// 3-savol
// function checkType(value) {
//     if (Array.isArray(value)) {
//       console.log("Bu array");
//     } else if (value === null) {
//       console.log("Bu null");
//     } else {
//       console.log("Bu " + typeof value);
//     }
//   }
  
//   checkType(5);        
//   checkType([1, 2]);   
//   checkType("Salom");  
//   checkType(true);     
//   checkType({});       
  

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


// DOM-2
// Accordion
// const acc = document.getElementById("accordion");
// const triggers = acc.querySelectorAll(".trigger");
// const panels = acc.querySelectorAll(".panel");


// acc.style.maxWidth = "560px";
// acc.style.margin = "24px auto";
// acc.style.border = "1px solid #ddd";
// acc.style.borderRadius = "8px";
// acc.style.overflow = "hidden";
// acc.style.fontFamily = "system-ui, sans-serif";


// acc.querySelectorAll(".item").forEach((item, i) => {
//   if (i > 0) item.style.borderTop = "1px solid #eee";
// });


// triggers.forEach(btn => {
//     btn.style.display = "flex";
//     btn.style.justifyContent = "space-between";
//     btn.style.alignItems = "center";
//     btn.style.width = "100%";
//     btn.style.padding = "14px 16px";
//     btn.style.background = "#fff";
//     btn.style.border = "0";
//     btn.style.cursor = "pointer";
//     btn.style.fontSize = "16px";
//   });
  


// acc.querySelectorAll(".chevron").forEach(icon => {
//     icon.style.transition = "transform 0.2s ease";
//   });
  


// panels.forEach(panel => {
//     panel.style.padding = "0 16px 14px",
//     panel.style.fontSize = "14px",
//     panel.style.color = "#444",
//     panel.style.display = "none"
// });


// function closeAll() {
//   triggers.forEach(btn => {
//     btn.setAttribute("aria-expanded", "false");
//     btn.querySelector(".chevron").style.transform = "rotate(0deg)";
//   });
//   panels.forEach(p => p.style.display = "none");
// }


// triggers.forEach((btn, i) => {
//   btn.addEventListener("click", () => {
//     const expanded = btn.getAttribute("aria-expanded") === "true";
//     closeAll();

//     if (!expanded) {
//       btn.setAttribute("aria-expanded", "true");
//       panels[i].style.display = "block";
//       btn.querySelector(".chevron").style.transform = "rotate(180deg)";
//     }
//   });
// });

// DOM Sonner
// const openBtn = document.getElementById("openModal");
// const overlay = document.getElementById("modalOverlay");

// let cards = []; 
// let idCounter = 0;

// function addCards() {
//   overlay.innerHTML = cards.map((card, index) => `
//     <div class="modal-box show" id="card-${card.id}">
//       <div class="sonner-card">
//         <p>Event has been created</p>
//         <p>Sunday, December 03, 2023 at 9:00 AM</p>
//       </div>
//       <button class="sonner-btn" onclick="removeCard(${index})">Close</button>
//     </div>
//   `).join("");
// }

// openBtn.addEventListener("click", () => {
//   const id = idCounter++;
//   cards.push({ id });
//   addCards();

 
//   setTimeout(() => {
//     let index = cards.findIndex(c => c.id === id);
//     if (index > -1) {
//       removeCard(index);
//     }
//   }, 3000); 
// });

// function removeCard(index) {
//   cards.splice(index, 1);
//   addCards();
// }

// DOM Drag-End-Drop
// const products = [
//     { id: 11, name: "Non", price: 1 },
//     { id: 2, name: "Sut", price: 2 },
//     { id: 3, name: "Suv", price: 3 },
//   ];
  
//   let cart = [];
  
//   const productList = document.getElementById("product-list");
//   const cartList = document.getElementById("cart-list"); 
//   const totalEl = document.getElementById("total"); 
//   const cartBox = document.getElementById("cart"); 
  
//   products.forEach((product) => {
//     const div = document.createElement('div');
//     div.className = 'product-item';
//     div.textContent = `${product.name} - $${product.price}`;
//     div.draggable = true;
//     div.dataset.id = product.id;
  
//     div.addEventListener('dragstart', (e) => {
//       e.dataTransfer.setData('text/plain', product.id)
//     })
  
//     productList.appendChild(div)
//   })
  
//   cartBox.addEventListener('dragover', (e) => {
//     e.preventDefault();
//     cartBox.classList.add("drag-over");
//   })
  
//   cartBox.addEventListener('dragleave', () => {
//     cartBox.classList.remove('drag-over');
//   })
  
//   cartBox.addEventListener('drop', (e) => {
//     e.preventDefault(); 
//     cartBox.classList.remove("drag-over");
//     const id = parseInt(e.dataTransfer.getData('text/plain'))
//     const product = products.find((p) => p.id === id);
//     if (product) {
//       addToCart(product);
//     }
//   })
  
//   function addToCart(product) {
//     const existing = cart.find((item) => item.id === product.id);
  
//     if (existing) {
//       existing.count++;
//     } else {
//       cart.push({ ...product, count: 1 });
//     }
//     alert(product.name)
//     updateCart();
//   }
  
//   function updateCart() {
//     cartList.innerHTML = ""; 
  
//     cart.forEach((p) => {
//       const li = document.createElement('li')
//       li.className = "cart-item"; 
//       li.textContent = `${p.name} x ${p.count} = $${(
//         p.price * p.count
//       ).toFixed(2)}`;
  
//       cartList.appendChild(li);
//     })
//     const totalPrice = cart.reduce((acc, cur) => acc + cur.price * cur.count, 0);
//     totalEl.textContent = `${totalPrice.toFixed(2)}`;
//   }

// Normative Local Storage and Event listeners

// klik hissoblagich

// const clickBtn = document.getElementById('click');

// let count = parseInt(localStorage.getItem('counter')) || 0;

// const son = document.getElementById('son');
// son.textContent = `son: ${count}`;

// clickBtn.addEventListener('click', () => {
//   count++;
//   localStorage.setItem('counter', count); 
//   son.textContent = `son: ${count}`; 
// });




// Input qiymatini saqlash

// const input = document.getElementById('input');
// const saveBtn = document.getElementById('saveBtn');
// const nameDisplay = document.getElementById('nameDisplay');

// const savedName = localStorage.getItem('name');
// if (savedName) {
//   nameDisplay.textContent = `Ism: ${savedName}`;
// }

// saveBtn.addEventListener('click', () => {
//   const name = input.value.trim();
//   if (name) {
//     localStorage.setItem('name', name);
//     nameDisplay.textContent = `Ism: ${name}`; 
//     input.value = "";
//   }
// });


// Form tekshruv

// const form = document.getElementById('form');
// const nameInput = document.getElementById('name');
// const emailInput = document.getElementById('email');
// const modal = document.getElementById('modal');
// const modalMessage = document.getElementById('modal-message');
// const closeModal = document.getElementById('closeModal');

// form.addEventListener('submit', function(e) {
//   e.preventDefault();

//   const name = nameInput.value.trim();
//   const email = emailInput.value.trim();

//   if (!name || !email) {
//     modalMessage.textContent = "Iltimos, barcha maydonlarni toldiring!";
//     modalMessage.style.color = "red";
//   } else if (!email.includes('@')) {
//     modalMessage.textContent = "Email notogri!";
//     modalMessage.style.color = "orange";
//   } else {
//     modalMessage.textContent = "Muvaffaqiyatli yuborildi!";
//     modalMessage.style.color = "green";
//   }


//   modal.style.display = "flex";


//   nameInput.value = "";
//   emailInput.value = "";
// });


// closeModal.addEventListener('click', () => {
//   modal.style.display = "none";
// });


// window.addEventListener('click', (e) => {
//   if (e.target === modal) {
//     modal.style.display = "none";
//   }
// });

// Sichqoncha koordinatalari
// const box = document.getElementById("box-mouse");
// const coords = document.getElementById("coords");

// box.addEventListener("mousemove", function(e) {
//   const rect = box.getBoundingClientRect(); 
//   const x = e.clientX - rect.left;
//   const y = e.clientY - rect.top;  

//   coords.textContent = `X: ${x}, Y: ${y}`;
// });

// box.addEventListener("mouseleave", function() {
//   coords.textContent = "Tashqaridaman";
// });


// Til o'zgartirish menusi

// const uzBtn = document.getElementById("uzBtn");
// const enBtn = document.getElementById("enBtn");
// const langMessage = document.getElementById("langMessage");
// const activeBg = document.querySelector(".active-bg");

// const texts = {
//   uz: "Salom, xush kelibsiz!",
//   en: "Hello, welcome!"
// };

// let currentLang = localStorage.getItem("lang") || "uz";

// function updateLanguage(lang) {
//   langMessage.textContent = texts[lang];
//   localStorage.setItem("lang", lang);

//   document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.remove("active"));

//   if (lang === "uz") {
//     uzBtn.classList.add("active");
//     activeBg.style.transform = "translateX(0)";
//   } else {
//     enBtn.classList.add("active");
//     activeBg.style.transform = "translateX(100%)";
//   }
// }

// uzBtn.addEventListener("click", () => updateLanguage("uz"));
// enBtn.addEventListener("click", () => updateLanguage("en"));

// updateLanguage(currentLang);


// EXAM hrml css va js dom
// tugma bosilganda text ozgarishi
const text = document.getElementById('text')
const btn = document.getElementById('btn-text')

btn.addEventListener('click', () => {
  text.textContent = "Salom"
});

// yangi li element qoshish
const list = document.getElementById('myList')
const addBtn = document.getElementById('addBtn')


addBtn.addEventListener('click', () => {
  const texts = prompt('yangi matin qoshing')

  if(texts) {
    const li = document.createElement('li')
    li.textContent = texts
    list.appendChild(li)
  }
})

// matin uzunligini korish
const textarea = document.getElementById('textarea')
const hissob = document.getElementById('hissob')

textarea.addEventListener('input', () => {
  hissob.textContent = textarea.value.length + ' ta';
});

// tugmani sanash

const buttons = document.querySelectorAll('#buttons button')
const btnCount = document.getElementById('btncount');
let total = 0;

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    total++;
    btnCount.textContent = total + " ta";
  });
});



// API + DOM

// async function product() {
//   try {
//     const res = await fetch("https://api.escuelajs.co/api/v1/products");
//     const products = await res.json();
//     const grid = document.getElementById("grid");

//     products.forEach(p => {
//       const card = document.createElement("div");
//       card.className = "border w-[200px] rounded-lg overflow-hidden shadow-sm flex flex-col";

//       const imgBox = document.createElement("div");
//       imgBox.className = "h-40 flex items-center justify-center bg-gray-100";

//       const img = document.createElement("img");
//       img.src = (p.images) || "";
//       img.alt = p.title;
//       img.className = "max-h-full max-w-full object-contain";
//       img.loading = "lazy";
//       imgBox.appendChild(img);

//       const content = document.createElement("div");
//       content.className = "p-2 flex flex-col flex-1";

//       const title = document.createElement("h2")
//       title.className = "text-sm font-medium truncate"
//       title.textContent = p.title

//       const category = document.createElement("p");
//       category.className = "text-sm text-gray-500 mt-1 truncate";
//       category.textContent = p.category?.name || "";

//       const description = document.createElement("p")
//       description.className = "mt-1 truncate"
//       description.textContent = p.description

//       const price = document.createElement("b")
//       price.textContent = p.price + "$"

//       content.appendChild(title)
//       content.appendChild(description)
//       content.appendChild(category)
//       content.appendChild(price)
//       card.appendChild(imgBox);
//       card.appendChild(content);
//       grid.appendChild(card);
//     });

//   } catch (err) {
//     alert("Error:" + err.message)
//   }
  
// }

// product()