const fruits = ["orange","apple","pineapple"];

for(let i=0; i< fruits.length; i++){
    console.log(fruits);
}

console.log("-----------------------------------------");

const person = "Junior";

const personDets = {
    name : "Ander",
    age : 24,
    counrty: "Kenya",
}

// for (const key in personDets) {
//     if(key === name)
//         personDets[key] = "Ian";
// }
// console.log(personDets);


const color = {
  boxOne: "red",
  boxTwo: "blue",
  boxThree: "green",
  boxFour: "yellow"

}

for(const property in color){
    console.log(color[property]);
}
