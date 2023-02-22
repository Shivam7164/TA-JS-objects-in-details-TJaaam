Assignment: Object and This
(Discuss this block)
1. Explain all the different rules given below for getting the value of this inside a function or method. Explain each with multiple examples.

* Default Binding

Ans => whenever calling of the function there is nothing on the left in that case `this` always point to the global object(window)

ex =>  function sayHello(){
    console.log(this)
}
sayHello()//window

* Implicit Binding

Ans => whenever there is object on the left of function call in that case `this` always point to the object

Ex => let user ={
    name:"shivam",
    sayHello(){
    alert (`Welcome ${this.name}`)    
}
}
user.sayHello()

* Explicit Binding

Ans => in this we explicitly we refer the object in function.

(i) `call` method

Ans => when the object is created outside the function .when the `call` method is used 

Ex => function sayHello(){
      console.log(`hello ${this.name}`)
    }
    let user = {
        name:"shiavm"
    }

(ii) `apply` method

Ans =>`apply` method similler to the `call` methode the only deffirent is when passing the paramiter one after another you pass inside the arr;

Ex => function sayHello(hobby1,hobby2){
    alert (`${this.name} like ${hobby1} and ${hobby2}`)
}
let user ={
    name:"shivam"
}

sayHello.apply(user,["basketball","moveis"])

(iii) `bind` method

Ans => `bind` method similler to the `call` and `apply` method but doesn't call the this method same time. it's return new function refrence 

Ex => function sayHello(hobby1,hobby2){
    alert (`${this.name} like ${hobby1} and ${hobby2}`)
}
let user ={
    name:"shivam"
}

let bindMethod = sayHello.bind(user,"basketball","moveis")
bindMethod()

* new Binding

Ans => whenever you will use new keyword it's always create object inside function. so this will point to that newly created object

ex => function User(name,age){
    this.name = name
    this.age = age
}

let person = new User("shivam",21)


this in arrow function
2. Output of the following code also write the rule that applies
let hello = function () {
  console.log(this);
};
let user = {
  name: 'Arya',
  sayHello: hello,
};

hello(); // window
user.sayHello(); // object

let hey = user.sayHello;
hey(); // window

3. What all things new keyword does. Explain with example.

ans => It creates new instance of object. it puts all the methods inside the dunder proto and return the object. 

Ex => function User(name,age){
     this.name=name
     this.age= age
}
let person = new User("shivam",21)

4. What is the difference between __proto__ (dunder proto) and prototype

dunder proto is always exist inside in object but prototype isalways exist inside function

5. What is prototypal nature of object.

Ans => protoypal(nature of object) is used  to send the object inside dunder proto 

Ex=>  let method = {
    username:"shivam",
    sayHello(){
        alert(`Welcome ${this.name}`)
    }
}

function user(name,age){
    let obj = Object.create(method)
    obj.name=name
    obj.age=age
    return obj;
}

Explain what is explicit binding? And how can we use call, bind and apply. Give example for each methods.

* mplicit Binding

Ans => whenever there is object on the left of function call in that case `this` always point to the object

Ex => let user ={
    name:"shivam",
    sayHello(){
    alert (`Welcome ${this.name}`)    
}
}
user.sayHello()

* `bind` method

Ans => `bind` method similler to the `call` and `apply` method but doesn't call the this method same time. it's return new function refrence 

Ex => function sayHello(hobby1,hobby2){
    alert (`${this.name} like ${hobby1} and ${hobby2}`)
}
let user ={
    name:"shivam"
}

let bindMethod = sayHello.bind(user,"basketball","moveis")
bindMethod()

* `apply` method

Ans =>`apply` method similler to the `call` methode the only deffirent is when passing the paramiter one after another you pass inside the arr;

Ex => function sayHello(hobby1,hobby2){
    alert (`${this.name} like ${hobby1} and ${hobby2}`)
}
let user ={
    name:"shivam"
}

sayHello.apply(user,["basketball","moveis"])