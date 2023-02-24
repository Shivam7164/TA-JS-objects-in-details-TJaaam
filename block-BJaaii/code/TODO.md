Stack and Queue
To understand how stack and queue works look at the following diagrams.

Stack 


Queue 


Create a class name Stack with the following data and methods. Also implement a length getter method.
Data:

stack
Methods:

push: will accept a value and add to the stack. Stack adds data at the end
pop: will delete the last element (max index) of the stack
peek: can accept and optional parameter. Will display the element at the given index(passed as argument). If nothing is passed display the last element (last index)
reverse: will reverse all the elements of the stack and return the reversed stack
isEmpty: returns true if the stack is empty and false if the stack has any data.
displayStack: returns all the data in stack in string format
Getter

length: returns the current length of the stack.
Test
let myStack = new Stack();
myStack.push('One');
myStack.push('Two');
console.log(myStack.length); //
console.log(myStack.peek()); // 
console.log(myStack.peek(0)); // 
console.log(myStack.reverse()); //
console.log(myStack.displayStack()); // 
myStack.pop();
console.log(myStack.length); //
console.log(myStack.peek()); // 
console.log(myStack.isEmpty()); // 
myStack.pop();
console.log(myStack.isEmpty()); // 


Create a class name Queue with the following data and methods. Also implement a length getter method.
Data:

queue
Methods:

enqueue(item): Adds the item at the end of the queue
dequeue: Removes an item from the top of the queue
peek: can accept and optional parameter. Will display the element at the given index(passed as argument). If nothing is passed display the first element from top (index 0)
isEmpty: returns true if the stack is empty and false if the stack has any data.
displayQueue: returns all the data in stack in string format
Getter

length: returns the current length of the stack.
Test
let atmQueue = new Queue();
atmQueue.enqueue('Aman');
atmQueue.enqueue('John');
atmQueue.enqueue('Rohan');
console.log(atmQueue.displayQueue()); //
console.log(atmQueue.length); //
console.log(atmQueue.peek()); // 
console.log(atmQueue.peek(1)); // 
atmQueue.dequeue();
console.log(atmQueue.length); //
console.log(atmQueue.peek()); // 
console.log(atmQueue.isEmpty()); // 
atmQueue.dequeue();
atmQueue.dequeue();
console.log(atmQueue.isEmpty()); //