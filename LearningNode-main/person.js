//console.log(__dirname, __filename);

class person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
}

module.exports = person;