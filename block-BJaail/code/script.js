class BookList {
    constructor(root, list = []) {
        this.root = root
        this.books = list
    }
    add(name, author, imgUrl) {
        let book = new Book(name, author, imgUrl)
        this.books.push(book)
        this.createUI()
    }
    
    createUI() {
        this.root.innerHTML = ""
        this.books.forEach((book)=>{
            let li = document.createElement("li")
        let h2 = document.createElement("h1")
        h2.innerText = book.name
        let p = document.createElement("p")
        p.innerText = book.authorName
        let img = document.createElement("img")
        img.src = book.imgUrl
        img.style.width = "100%"
        let readBookButton = document.createElement("h2")
        readBookButton.innerText=book.state?'completed!':'book to Read'
        readBookButton.className='state'
        readBookButton.addEventListener("click",()=>{
            book.change()
            this.createUI()
        
        })
        li.append(img, h2, p,readBookButton)
        this.root.append(li)
        })
    }
   
}


class Book {
    constructor(name, author, imgUrl) {
        this.name = name
        this.authorName = author
        this.imgUrl = imgUrl
        this.state=false
    }
    change(){
        this.state = !this.state
    }
    
}
let form = document.querySelector("form")
let inputName = document.querySelector(".name")
let BookList1 = new BookList(document.querySelector(".books"))

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = event.target.elements.name.value
    let author = event.target.elements.authorName.value
    let imgUrl = event.target.elements.imgurl.value
    BookList1.add(name, author, imgUrl)
    event.target.elements.name.value = ""
    event.target.elements.authorName.value = ""
    event.target.elements.imgurl.value = ""
})