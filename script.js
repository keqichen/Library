
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
