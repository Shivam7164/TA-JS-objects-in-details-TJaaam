Assignment: Why OOP?

(Discuss this block)

1. What are the different ways of accessing and assigning properties inside an object? Explain with multiple examples.

object inside two way accessing and assigning properties.
1. Dot notaion
2. Bracket notaion

=>Ex Dot notaion accessing properties
 let obj = {
    fn:"shivam",
    age:12
 }
 obj.fn
 //'shivam'

 =>Ex Dot nataion assigning properties
 let obj = {
    fn:"shivam",
    age:12
 }
 obj.ln = "rajpoot"
obj.ln
//'rajpoot'


=>Ex Dot notaion accessing properties
 let obj = {
    'first name':"shivam",
    ln:"rajpoot",
    12:12
 }
 obj['first name']
 //'shivam'

 obj[12]
 //12

 let xyz = "ln"
 obj[xyz]
 //'rajpoot'


=>Ex Bracket nataion assigning properties
let obj = {
    fn:"shivam",
    age:12
 }
 obj['ln'] = 'rajpoot'
 obj['ln']
 //'rajpoot'

2. Why we have Object Oriente Programming?

it's easy to add feature and better organization etc

3. Create a function name createUser that accepts name and age and returns an object with multiple properties and methods. You can find the list below.

name (it will contain the value coming from argument)
age
updateName - this function will accept a new name and update the name property of the obj
updateAge - this function will accept a new age and update the name property of the obj

//your code goes here


 function createUser(name,age){
    return {
        name:"shivam",
          age:21,
        updateName: function(nName){
           name = nName
           return name
        },
        updateAge: function(nAge){
          age = nAge
          return age
         return 
        }
    }
}

4. Create a getBook function that accepts the title and author of the book and returns an object.

//your code goes here

title from parameter
author from parameter
getSummary function will return the message ${title} is written by ${author}

function getBook(title,author){
  let obj = {}
  obj["title"] = title
  obj["author"] = author
  obj["getSummary"] = ()=>{
    return `${title} is written by ${author}`
  }
  return obj
}

let first = getBook("you give me blood i will give you freedom","Netaji Subhash Chandra Bose")
first.getSummary()