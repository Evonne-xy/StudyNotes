class Student{
    
    constructor(name, age){
       this.name = name;
        this.age = age
    }

    sayHi(){
        console.log(`name: ${this.name}, age: ${this.age}`)
    }
}

const student1 =  new Student('Evonne',22)
student1.sayHi()