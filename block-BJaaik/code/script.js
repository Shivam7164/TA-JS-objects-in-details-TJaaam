// Create Class
// Convert the given image into class using inheritance.

// name is the property
// eat() is the method
// Property ending with () is method. And others are properties.


// ######## Person ########

class Person{
    constructor(name,age,gender){
      this.name = name
      this.age = age
      this.gender = gender
    }
    eat(){
     console.log(`my name is ${this.name} i eat`)
    }
    sleep(){
        console.log(`my name is ${this.name} i sleep`)
    }
    walk(){
        console.log(`my name is ${this.name} i walk`)
    }
}

// ######## Player ########

class Player extends Person{
  constructor(sportName,name,age,gender){
    super(name,age,gender)
    this.sportName = sportName
  }
  play(){
   console.log(`i am ${this.name} i can play`)
  }
}

// ######## Teacher ########

class Teacher extends Person{
   constructor(instituteName,name,age,gender){
    super(name,age,gender)
    this.instituteName = instituteName
   } 
   teach(){
    console.log(`i am ${this.name} i can teach`)
   }
}

// ######## Artist ########

class Artist extends Person{
    constructor(kind,name,age,gender){
        super(name,age,gender)
     this.kind = kind
    }
    createArt(){
        console.log(`i am ${this.name} i can createArt`)
    }
}

// ######## Cricketer ########

class Cricketer extends Player{
    constructor(teamName,sportName,name,age,gender){
       super(sportName,name,age,gender)
      this.teamName = teamName
    }  
    playCricket(){
     console.log(`i love ${this.name} i can play cricket`)
    }
  }

//  ###### Text #######

let cricketer1 = new Cricketer("india","cricket","shivam",21,"male")