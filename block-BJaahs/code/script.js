/* 1. */ const ques = {
    title: 'Where is the capital of India',
    options: ['Tashkent', 'Delhi', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
    isAnswerCorrect: (index) => {
       return ques.correctAnswerIndex===index
    },
    getCorrectAnswer: () => {
        return ques.options[ques.correctAnswerIndex]
    }

} 

console.group(ques.title)
console.log(ques.options)
console.log(ques.isAnswerCorrect(0))
console.log(ques.getCorrectAnswer());
console.groupEnd()


/* 2. */
//Without Object

//1
let user1Name = "shivam"
let user1Score = 0
function user1IncreaseScore(value = 1){
    user1Score = user1Score + value;
   return user1Score 
};

function user1DecreaseScore(value = 1){
    user1Score = user1Score - value;
   return user1Score 
};

function user1ChangeName(name){
    user1Name = name
   return  user1Name
};

//2
let user2Name = "shivam"
let user2Score = 0
function user2IncreaseScore(value = 1){
    user2Score = user2Score + value;
   return user2Score 
};

function user2DecreaseScore(value = 1){
    user2Score = user2Score - value;
   return user2Score 
};

function user2ChangeName(name){
    user2Name = name
   return  user2Name
};

//Organize using object

let user1 = {
    user1Name:"shivam",
    user1Score :0,
    user1IncreaseScore :function(value = 1){
        user1.user1Score = user1.user1Score + value;
       return user1.user1Score 
    },
    user1DecreaseScore :function (value = 1){
        user1.user1Score = user1.user1Score - value;
       return user1Score 
    },
    user1ChangeName :function (name){
        user1.user1Name = name
       return  user1.user1Name
    }
}

let user2 = {
    user2Name:"akanksha",
    user2Score :0,
    user2IncreaseScore :function(value = 1){
        user2.user2Score = user2.user2Score + value;
       return user2.user2Score 
    },
    user2DecreaseScore :function (value = 1){
        user2.user2Score = user2.user2Score - value;
       return user2.user2Score 
    },
    user2ChangeName :function (name){
        user2.user2Name = name
       return  user2.user2Name
    }
}
console.log(user1IncreaseScore(12))
console.log(user1IncreaseScore(13))



//Use a function to create object

function findValue(name,score=0){
 let obj = {}
  obj["userName"] = name;
  obj["userScore"] = score;
  obj["user2IncreaseScore"] = function(value = 1){
    obj["userScore"] = obj["userScore"] + value;
   return obj["userScore"] 
};
obj["user2DecreaseScore"] = function (value = 1){
    obj["userScore"] = obj["userScore"] - value;
   return obj["userScore"]
};
obj["user2ChangeName"] = function (name){
    obj["userName"] = name
   return  obj["userName"]
}
return obj
}


// Convert the function to use this keyword


function s(name,score=0){
    let obj = {}
     obj["userName"] = name;
     obj["userScore"] = score;
     obj["userIncreaseScore"] = function(value = 1){
       this["userScore"] = this["userScore"] + value;
      return this["userScore"] 
   };
   obj["userDecreaseScore"] = function (value = 1){
       this["userScore"] = this["userScore"] - value;
      return this["userScore"]
   };
   obj["userChangeName"] = function (name){
       this["userName"] = name
      return  this["userName"]
   }
   return obj
   }



