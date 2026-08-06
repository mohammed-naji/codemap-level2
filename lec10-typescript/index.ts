// const user = {
//   firstName: "Angela",
//   lastName: "Davis",
//   role: "Professor",
// };

// console.log(user.name);

// let x : number = 10;

// type User = {
//   firstName: string;
//   lastName: string;
//   role: number | string | boolean;
// };
type Role = number | string | boolean;

interface User {
  firstName: string;
  lastName: string;
  role: Role;
}

const user : User = {
  firstName: "Angela",
  lastName: "Davis",
  role: "ddd",
}

user.role = true;
