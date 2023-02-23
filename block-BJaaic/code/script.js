// Convert the below requirements into inheritance using prototypal patters.

// Animal
// Properties:

// location
// numberOfLegs
// Methods

// eat() - log a message saying I live in ${location} and I can eat

// changeLocation(newLocation) - accepts location and updates the location of the animal

// summary() - returns I live in ${location} and I have ${numberOfLegs}

let animalMethods = {
    eat(){
        console.log(`I live in ${this.location} and I can eat`)
    },
    changeLocation(newLocation){
     this.location = newLocation
    },
     summary(){
     return  `I live in ${this.location} and I have ${this.numberOfLegs}`
     }
}

function animal(location,numberOfLegs){
    let animalObject = Object.create(animalMethods)
    animalObject.location=location
    animalObject.numberOfLegs = numberOfLegs
    return animalObject;
}



// Dog
// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// name
// color
// Methods:

// bark() - alerts a message saying I am ${name} and I can bark 🐶
// changeName(newName) - accepts the name property and updates the name of the dog
// changeColor(newColor) - accepts the new color and updates the color of the dog
// summary() - returns I am ${name} and I am of ${color} color. I can also bark

let dogMethods = {
    bark(){
        alert(`I am ${this.name} and I can bark 🐶`)
    },
    changeName(newName){
     this.name = newName
    },
    changeColor(newColor){
        this.color = newColor
    },
     summary(){
     return  `I am ${this.name} and I am of ${this.color} color. I can also bark`
     }
}


function dog(location,numberOfLegs,name,color){
    let dogObj = animal(location,numberOfLegs)
    Object.setPrototypeOf(dogObj,dogMethods)
    dogObj.name=name
    dogObj.color = color
    return dogObj;
}

Object.setPrototypeOf(dogMethods,animalMethods)




// Cat
// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// name
// colorOfEyes
// Methods:

// meow() - alerts a message saying I am ${name} and I can do mewo meow 😹

// changeName(newName) - accepts the name property and updates the name of the dog

// changeColorOfEyes(newColor) - accepts the new color and updates the color of the dog

// summary() - returns I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow


let catMethods = {
    meow(){
        alert(`I am ${this.name} and I can do mewo meow 😹`)
    },
    changeName(newName){
     this.name = newName
    },
    changeColorOfEyes(newColor){
        this.color = newColor
    },
     summary(){
     return  `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
     }
}


function cat(location,numberOfLegs,name,colorOfEyes){
    let catObj = animal(location,numberOfLegs)
    Object.setPrototypeOf(catObj,catMethods)
    catObj.name=name
    catObj.colorOfEyes = colorOfEyes
    return catObj;
}

Object.setPrototypeOf(catMethods,animalMethods)

let cat1 = cat("agra",14,"rusi","black")