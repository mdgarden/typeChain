interface Human {
    name:string;
    age:number;
    gender:string;
}


const person = {
    name: "lemma",
    age: 22,
    gender: "female"
}

const sayHi = (person: Human) => {
    return `Hello ${person.name}, you are ${person.gender}, you are a ${person.age} `;
}

console.log(sayHi(person));


export {};