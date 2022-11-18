
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

    isInLibrary(newBook){
        return this.myBooks.some((book)=>book.title===newBook.title)
    }

}

// modal box
let btn = document.getElementById("myBtn");
let modal = document.getElementById("myModal");
let close = document.querySelector("span");

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
    
    

