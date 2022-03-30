const person:{
  name: string;
  age: number;
  hobies: string[];
  role: [number, string]
} = {
  name: "Doven",
  age: 34,
  hobies: ["Sport", "Fitnes"],
  role: [2, "author"]
};

person.role.push("admin");
// person.role[1] = 10;


let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name)