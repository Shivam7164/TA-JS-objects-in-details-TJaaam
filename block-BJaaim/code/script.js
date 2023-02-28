
let submit = document.querySelector(".submit")
let rootele = document.querySelector(".data")
class Quiz {
    constructor(rootele) {
        this.rootEle = rootele
        this.count = 0
    }

    nextQuestion() {
        this.count === 2 ? '' : this.count = this.count + 1
        this.createUI()
    }

    createUI() {
        this.rootEle.innerHTML = ""
        let li = document.createElement("li")
        let p = document.createElement("p")
        p.innerText = quizCollection[this.count].title
        li.append(p)
        let span = document.createElement("span")
        span.innerText = ''
        for (let arr of quizCollection[this.count].options) {
            let correctIndex = quizCollection[this.count].correctAnsIndex
            let option = quizCollection[this.count].options
            let input = document.createElement("input")
            input.type = "radio"
            input.name = "question"
            let div = document.createElement("div")
            input.addEventListener('click', (e, Index) => {
                if (arr === option[correctIndex]) {
                    span.innerText = "correctAnswer"
                    span.style.color = "green"
                } else {
                    span.innerText = `${arr} is a wrongAns. correctAns is ${option[correctIndex]}`
                    span.style.color = "red"
                }
            })
            let label = document.createElement("label")
            label.innerText = arr;
            div.append(input, label)
            li.append(div)
        }

        let button = document.createElement('button')
        button.innerText = 'Next'
        this.rootEle.append(li, button, span)
        button.addEventListener("click", this.nextQuestion.bind(this))
    }
}

let question = new Quiz(rootele)
question.createUI()

submit.addEventListener("click", (e) => {
    e.preventDefault()
    question.count === 2 ? '' : this.count = question.count++

    question.createUI()
})
