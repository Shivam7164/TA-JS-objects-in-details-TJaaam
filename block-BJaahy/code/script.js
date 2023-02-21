// Create a class named Square which accepts one parameter side and will set two property width and height to the value of side.

// class Square{
//     constructor(side){
//       this.width = side
//       this.height = side
//     }
// }

// Add a method name description that will alert a message saying The square is ${width} x ${height}

// class Square{
//     constructor(side){
//       this.width = side
//       this.height = side
//     }

//     description(){
//       alert (`The square is ${width} x ${height}`)  
//     }
// }

// Create a method inside the class named calcArea that will return the area of the square.

// class Square{
//     constructor(side){
//       this.width = side
//       this.height = side
//     }
//     description(){
//       alert (`The square is ${width} x ${height}`)    
//     }
//     calcArea(){
//         return this.width*this.height
//     }
// }


// Create a area getter method using which we can get the area of the square.

// class Square{
//     constructor(side){
//       this.width = side
//       this.height = side
//     }
//     description(){
//       alert (`The square is ${width} x ${height}`)    
//     }
//     
//     get area(){
//        return this.width*this.height
//     }
// }


// Create a area setter method that will accept the area of the square. Based on the value of area it will set the value of width and height. If the passed value is not the area of the square alert say Not a valid input

// class Square{
//     constructor(side){
//       this.width = side
//       this.height = side
//     }
//     description(){
//       alert(`The square is ${this.width} x ${this.height}`)    
//     }
//     get area(){
//        return this.width * this.height
//     }
//    set area(value){
//     let side = Math.sqrt(value);
//     this.width = side;
//     this.width = side;
//    }
// }

// Create a static method named isEqual which accepts two square object with width and height property. If the area of both square is same it will return true or false.

// class Square{
//     constructor(side){
//       this.width = side
//       this.height = side
//     }
//     description(){
//       alert(`The square is ${this.width} x ${this.height}`)    
//     }
//     get area(){
//        return this.width * this.height
//     }
//    set area(value){
//     let side = Math.sqrt(value);
//     this.width = side;
//     this.width = side;
//    }
//    static isEqual(width,height){
//     return this.width*this.height === width*height
//    }
// }

// Create another property named numberOfTimes that will hold the value of number of times the area property is accessed from the object. The values will initialize to 0. The area property can't be accessed more than 4 times. If it crosses 4 times alert message Upper Limit Reached

// class Square {

//     constructor(side) {
//         this.width = side
//         this.height = side
//         this.numberOfTimes = 0
//     }

//     description() {
//         alert(`The square is ${this.width} x ${this.height}`)
//     }

//     get area() {
//         if (this.numberOfTimes >= 4) {
//             alert(`Upper Limit Reached`)
//         } else {
//             this.numberOfTimes++;
//             return this.width * this.height
//         }
//     }
//     set area(value) {
//         let side = Math.sqrt(value);
//         this.width = side;
//         this.height = side;
//     }

//     static isEqual(a , b) {
//      return (a.width * a.height) === (b.width * b.height)
//     }

// }

// Create two instance of the Square class

// let square1 = new Square(200)
// let square2 = new Square(200)


// Check the area getter method on both square. Check the area property on one square more than 4 times.

// console.log(square1.area)
// console.log(square2.area)
// console.log(square2.area)
// console.log(square2.area)
// console.log(square2.area)
// console.log(square2.area)

// Check the isEqual method and pass the two instance you created above.

// console.log(Square.isEqual(square1,square2));


// User Class

// Create a User class that accepts firstName and lastName property

// class User{
//     constructor(fn,ln){
//        this.fn = fn
//        this.ln = ln
//     }
// }

// Create a getter method named fullName that will return the full name of the person.

// class User{
//     constructor(fn,ln){
//        this.fn = fn
//        this.ln = ln
//     }
//     get fullName(){
//         return this.fn + " " + this.ln
//     }
// }

// Create a fullName setter method that will accept full name parameter of the person. It will update the firstName and lastName based on the input. Say if the user passed Arya Stark it will update the firstName to Arya and lastName to Stark. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying Full name should be more than 5 characters

// class User{
//     constructor(fn,ln){
//        this.fn = fn
//        this.ln = ln
//     }
//     get fullName(){
//         return this.fn + " " + this.ln
//     }
//     set fullName(fName){
//       let fullName = fName.split(" ")
//       if(fName.length <= 5){
//       alert (`Full name should be more than 5 characters`)  
//       }else{
//         this.fn = fullName[0]
//         this.ln = fullName[1]
//       }
//     }
// }



// Create a method named nameContains which will accept string and will return true or false based on if the name of the user contains the text that passed by user.

class User{
    constructor(fn,ln){
       this.fn = fn
       this.ln = ln
    }
    get fullName(){
        return this.fn + " " + this.ln
    }

    set fullName(fName){
      let fullName = fName.split(" ")
      if(fName.length <= 5){
      alert (`Full name should be more than 5 characters`)   
      }else{
        this.fn = fullName[0]
        this.ln = fullName[1]
      }
    }
    nameContains(str){
      return str === this.fn +" "+this.ln
    }
}


// Create two instance of the User class

let user1 = new User("shivam","rajpoot")
let user2 = new User("ajay","kumar")


// Check by using the fullName setter method with name bigger than 5 characters.

// console.log(user1.fullName = "shivam rajpoot");

// Check by using the fullName setter method with name less than 5 characters.

// console.log(user1.fullName = "shi r");

// Check the fullName using getter

// console.log(user1.fullName = "shivam rajpoot");

// Check the nameContains method

// console.log(user1.nameContains("shivam rajpoot"));