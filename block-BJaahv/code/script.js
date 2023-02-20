// Create in all 4 formats
//  Using function to create object
//  Using Object.create (prototypal pattern)
//  Using Pseudoclassical Way
//  Using Class
// Requirements
// Create User (class/function) with the following properties.

//  properties (data):
//  name
//  id
//  noOfProjects
//  methods:
//  getProjects -> return number of project
//  changeName -> accepts one parameter (newName)returns old user name
//  incrementProject -> returns updated number of projects
//  decrementProject -> returns updated number of projects
// Write 2 tests for all the different ways of creating object. Test all the methods on these objects.



//  Using function to create object

// function user(name,id,noOfProjects){
//    let userData = {}
//    userData["name"] = name
//    userData["id"] = id 
//    userData["noOfProjects"] = noOfProjects

//    userData["getProjects"] = function(){
//      return  userData.noOfProjects
//    }
//    userData["changeName"] = function(newName){
    //   let prevName = UserData.name
//       userData.name = newName
//       return userData.name
//    }
//    userData["incrementProject"] = function(){
//      return ++noOfProjects
//    }
//    userData["decrementProject"] = function(){
//     return --noOfProjects
//    }
//    return userData;
// }



// Using Object.create (prototypal pattern)

// let userMethods = {
//     getProjects : function(){
//         return  this.noOfProjects
//       },
//       changeName :function(newName){
//         let prevName = this.name
    // this.name = newName 
    // return this.name
//       },
//       incrementProject : function(){
//         return ++this.noOfProjects
//       },
//       decrementProject : function(){
//        return --this.noOfProjects
//       }
// }

// function user(name,id,noOfProjects){
//    let userData = Object.create(userMethods)
//    userData["name"] = name
//    userData["id"] = id 
//    userData["noOfProjects"] = noOfProjects
//    return userData
// }



//  Using Pseudoclassical Way

function User(name,id,noOfProjects){
   this["name"] = name
   this["id"] = id 
   this["noOfProjects"] = noOfProjects
}

User.prototype = {
getProjects : function(){
            return  this.noOfProjects
          },
          changeName :function(newName){
             let prevName = this.name
    this.name = newName 
    return this.name
          },
          incrementProject : function(){
            return ++this.noOfProjects
          },
          decrementProject : function(){
           return --this.noOfProjects
          }
 }



// Using Class

// class User {
//     constructor(name, id, noOfProjects) {
//         this["name"] = name
//         this["id"] = id
//         this["noOfProjects"] = noOfProjects
//     }
//      getProjects() {
//     return this.noOfProjects
// }
// changeName(newName) {
//     let prevName = this.name
//     this.name = newName 
//     return this.name
// }
// incrementProject() {
//     return this.noOfProjects += 1
// }
// decrementProject() {
//     return this.noOfProjects -= 1
// }
// }

let firstUser = new User("shivam", 123, 2)