
class Book {
    constructor(
        title='Unknown',
        author='Unknown',
        page='0',
        isRead=false
    ){
        this.title=title
        this.author=author
        this.page=page
        this.isRead=isRead
        }
}

class Library{
    constructor(){
        this.myBooks=[]
    }

    addBook(newBook){
        if(!this.isInLibrary(newBook)){
            this.myBooks.push(newBook)
        }
        else{
            alert("This book has already in your library :)")
        }
    }

    removeBook(title){
        this.books=this.books.filter((book)=>book.title !==title)
    }

    getBook(title) {
        return this.books.find((book) => book.title === title)
      }

    isInLibrary(newBook){
        return this.myBooks.some((book)=>book.title===newBook.title)
    }
}

const library = new Library()

const bookGrid = document.getElementById('booksGrid');

const updateBookGrid = () => {
    resetBookGrid()
    for (let book of library.books) {
      createBookCard(book)
    }
  }
  
  const resetBookGrid = () => {
    bookGrid.innerHTML = ''
  }

// modal box
let btn = document.getElementById("myBtn");
let modal = document.getElementById("myModal");
let close = document.getElementsByClassName("close")[0];
let submit = document.getElementsByClassName("btn")[1];

btn.onclick = function(){
    modal.style.display="block";
}

close.onclick = function(){
    modal.style.display="none";
}

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display="none";
    }
}

// book grid
const createBookCard=function(book){
    const bookCard=document.createElement("div")
    const title=document.createElement("p")
    const author=document.createElement("p")
    const pages=document.createElement("p")
    const buttonGroup=document.createElement("div")
    const removeBtn=document.createElement("button")
    const readBtn=document.createElement("button")

    bookCard.classList.add('book-card')
    buttonGroup.classList.add('button-group')
    removeBtn.classList.add('btn')
    readBtn.classList.add('btn')
    removeBtn.onclick=removeBook
    readBtn.onclick=toggleRead

    title.textContent = `"${book.title}"`
    author.textContent = `"${book.author}"`
    pages.textContent = `${book.pages} pages`
    removeBtn.textContent = 'Remove'
  
    if (book.isRead) {
      readBtn.textContent = 'Read'
      readBtn.classList.add('btn-light-green')
    } else {
      readBtn.textContent = 'Not read'
      readBtn.classList.add('btn-light-red')}

      bookCard.appendChild(title)
      bookCard.appendChild(author)
      bookCard.appendChild(pages)
      buttonGroup.appendChild(readBtn)
      buttonGroup.appendChild(removeBtn)
      bookCard.appendChild(buttonGroup)
      bookGrid.appendChild(bookCard)
    }

const getBookFormInput = function(){
    const title = document.getElementById("title").value
    const author = document.getElementById("author").value
    const pages = document.getElementById("pages").value
    const isRead = document.getElementById("isRead").ariaChecked
    return new Book(title, author, pages, isRead)
}

const addBook = function(event){
    event.preventDefault();
    const newBook = getBookFormInput();

    if (library.isInLibrary(newBook)){
        errorMsg.textContent = "This book already exists in your library"
        errorMsg.classList.add('active')
    } else{
        library.addBook(newBook);
        updateBookGrid();
    }
}

const addBookForm = document.getElementByClassName('add-book-form')[0];
addBookForm.onsubmit = addBook
    

