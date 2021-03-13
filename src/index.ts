class Human {
    public name: string;
    private age: number;
    public gender: string;
    constructor(name: string, age:number, gender?:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lynn = new Human("Lynn", 18, "female");

const sayHi = (person: Human) => {
    return `Hello ${person.name}, you are ${person.gender}, you are a ${person.age} `;
}

console.log(sayHi(lynn));


export {};