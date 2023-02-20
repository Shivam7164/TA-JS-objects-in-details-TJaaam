// Prototypal pattern 

// let Methods ={
//     isAnswerCorrect(index){
//        return this.correctAnswerIndex===index
//     },
//     getCorrectAnswer(){
//      return this.options[this.correctAnswerIndex]
//     }
// }
// function Question(title,options,correctAnswerIndex){
//   let obj = Object.create(Methods)
//    obj["title"] = title
//    obj["options"] = options
//    obj["correctAnswerIndex"] = correctAnswerIndex
//    return obj
// }

// Pseudoclassical Pattern

// function Question(title, options, correctAnswerIndex) {
//     this["title"] = title
//     this["options"] = options
//     this["correctAnswerIndex"] = correctAnswerIndex
// }

// Question.prototype = {
//     isAnswerCorrect(index) {
//         return this.correctAnswerIndex === index
//     },
//     getCorrectAnswer() {
//         return this.options[this.correctAnswerIndex]
//     }
// }

// Create using class

class Question{
   constructor (title, options, correctAnswerIndex){
    this['title'] = title
    this['options'] = options
    this['correctAnswerIndex'] = correctAnswerIndex
   }
   isAnswerCorrect(index) {
            return this.correctAnswerIndex === index
        }
        getCorrectAnswer() {
            return this.options[this.correctAnswerIndex]
        }
}



let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );

  let secondQuestion = new Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );


