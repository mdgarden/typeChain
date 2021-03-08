const name = "Lemma",
    race = "midlander",
    job = "black mage",
    level = 80;

const sayHi = (name, race, job, level) => {
    console.log(`Hello ${name}, you are ${level} level ${job}, you are a ${race} `);
}

sayHi(name, race, job, level);

export {};