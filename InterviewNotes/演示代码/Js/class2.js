class People{
    
    constructor(name, age){
       this.name = name;
        this.age = age
    }

    eat(){
        console.log('eat')
    }
   
}


class Student extends People{
    constructor(name,age,id){
        super(name,age)
        this.id  = id
    }

    sayHi(){
        console.log(`name: ${this.name}, age: ${this.age}, id: ${this.id}`)
    }
}

const student1 =  new Student('Evonne',22,2)
student1.sayHi()
student1.eat()