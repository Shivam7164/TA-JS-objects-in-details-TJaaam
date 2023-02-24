// Create a function named myMap and add the method to Array.prototype. 
// myMap will behave similar to how the Array.map works. To test the implementation use the code below.
// You should know once you add an extra method to Array.prototype and refresh the page. 
// The method you added will be gone.

Array.prototype.myMap = function (cb) {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        arr.push(cb(this[i]))
    }
    return arr;
}

let numArray = [1, 2, 3, 4, 5]
let words = 'quick brown fox jumped over a lazy dog'.split(" ")
function multiple(num) {
    return num * 2 - 1
}
function firstWordCapital(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1))
}

let multipleTwo = numArray.myMap(multiple)
let capitalWords = words.myMap(firstWordCapital)
console.log(multipleTwo)
console.log(capitalWords.join(' '))

// Add a method named myFilter to Array.prototype. 
// myFilter should behave similar to Array.filter. 
// After adding the function test it using the code below.

Array.prototype.myFilter = function (cb) {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        if (this[i] < 5) {
            arr.push(cb(this[i]))
        }
    }
    return arr;
}

let numOfArr = [4, 5, 2, 7, 1, 9, 3, 10, 1]
function number(num) {
    if (num < 5) {
        return num
    }
}
let lessThanFive = numOfArr.myFilter(number)
console.log(lessThanFive)


// Add a method named shuffle to Array.prototype. 
// Using the method shuffle will 
// return a new array and in the new array the index of the elements will be shuffled (randomly reorders).

Array.prototype.shuffle = function () {
    let res = []
    res = this.sort(() => 0.5 - Math.random())
    return res
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr.shuffle())
console.log(arr.shuffle())
console.log(arr.shuffle())
console.log(arr.shuffle())

// Add a method named unique to Array.prototype. 
// Using the method will return a new array and 
// it should only contain unique elements in the array. 
// Unique means no element should come multiple times.

Array.prototype.unique = function () {
    let uniqueArr = []
    for (let i = 0; i < this.length; i++) {
        if (!uniqueArr.includes(this[i])) {
            uniqueArr.push(this[i])
        }
    }
    return uniqueArr
}
let multipleNum = [1, 24, 5, 1, 3, 5]
let uniqueNum = multipleNum.unique()
console.log(uniqueNum)

// Add a method named intersection to Array.prototype.
// The method intersection will accept an array and returns a new array 
// that will contain only element that is common in both the array.

Array.prototype.intersection = function (arr=1) {
    console.log(arr)
    let res = this.filter(ele => arr.includes(ele))
    return res
}
let multipleArr = [1, 24, 5, 3, 4]
console.log(multipleArr.intersection([7, 8, 9, 5, 1]))



// Add a method named chunk to Array.prototype. 
// The method chunk will accept one parameter length and split 
// the array into groups the length of size. If array can't be split evenly, 
// the final chunk will be the remaining elements. length should default to 1.

Array.prototype.chunk = function (n) {
    let Length = Math.ceil(this.length / n)
    let finalArr = []
    for (let i = 0; i < Length; i++) {
        finalArr.push(this.splice(0, n))
    }
    return finalArr
}
let arr1 = [1, 2, 3, 4, 5, 6, 7]
console.log(arr1.chunk(2));