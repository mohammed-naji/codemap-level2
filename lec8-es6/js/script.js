// // // // Destructure
// // // // let user = {
// // // //   name: "Mohammed",
// // // //   email: "moh@gmail.com",
// // // // };

// // // // let { name, email } = user;

// // // // console.log(name);

// // // // let [count, setCount] = useState();

// // // // let marks = [100, 90, 80];
// // // // let [abood, aaaaaa] = marks;
// // // // console.log(m1, m2);

// // // let user = {
// // //   name: "Mohammed",
// // //   email: "moh@gmail.com",
// // //   age: 32,
// // // };

// // // let user2 = {
// // //   name: "Mohammed",
// // //   email: "moh@gmail.com",
// // //   age: 32,
// // // };

// // // let user3 = {
// // //   name: "Mohammed",
// // //   email: "moh@gmail.com",
// // //   age: 32,
// // // };

// // // let user4 = {
// // //   name: "Mohammed",
// // //   email: "moh@gmail.com",
// // //   age: 32,
// // // };

// // // printInfo(user);

// // // function printInfo({ name, email }) {
// // //   console.log(`Welcome ${name}, Your email is ${aa}`);
// // // }

// // // let products = ["iphone", "watch", "ipad"];

// // // let extraProducts = ["airpods", ...products, "dddd"];
// // // console.log(extraProducts);

// // // console.log(avg(90, 80));
// // // console.log(avg([90, 80, 70]));
// // // console.log(avg([90, 80, 70, 60, 80, 90]));

// // // function avg(...marks) {
// // //   let sum = 0;
// // //   marks.forEach((el) => {
// // //     console.log(el);

// // //     // sum += Number(el);
// // //   });
// // //   return sum;
// // //   // console.log(marks);
// // // }

// // // console.log(avg(100, 80, 90));

// // // function avg(m1, m2, m3, m4 = 0, m5 = 0) {
// // //   let sum = m1 + m2 + m3 + m4 + m5;
// // //   return sum / 5;
// // // }

// // console.log(avg(100, 80, 70, 90));
// // function avg(...marks) {
// //   // let sum = 0;
// //   // marks.forEach((el) => {
// //   //   sum += Number(el);
// //   // });

// //   let sum = marks.reduce((acc, curr) => (acc += curr), 0);
// //   // console.log(sum);

// //   return sum / marks.length;
// // }

// let nums = [2, 4, 7, 3, 9];
// // let res = nums.map((num) => Math.pow(num, 2));
// let filtred = nums.filter((num) => num > 5);
// // let res = [];
// // nums.forEach((num) => {
// //   res.push(Math.pow(num, 2));
// // });
// console.log(filtred);
