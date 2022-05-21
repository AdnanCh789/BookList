// book constructor 
function Book(title,author,isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;


}

// UI constructor
function UI() {

    UI.prototype.addBookToList = function(book) {
     const list = document.getElementById('book-list');
     //create tr
     const row = document.createElement('tr')
     //  insert cols
     row.innerHTML = `<td>${book.title}</td> <td>${book.author}</td> <td>${book.isbn}</td> <td><a href="#" class="delete">X<a></td>`;
     list.appendChild(row);
    }

    //showalert
    UI.prototype.showAlert = function(message,className) {
        //crate a div
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        //timeotu
        setTimeout(function(){
        document.querySelector('.alert').remove();

        },3000)



    }

    // delete
    UI.prototype.deleteBook = function(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();

        }
    }

    // clear fields
 UI.prototype.clearFields = function () {
     document.getElementById('title').value = '';
     document.getElementById('author').value = '';
     document.getElementById('isbn').value = '';
 }
}


// event listners
document.getElementById('book-form').addEventListener('submit', function(e) {
const title = document.getElementById('title').value,
      author = document.getElementById('author').value,
      isbn = document.getElementById('isbn').value
// creating new book
const book = new Book(title,author,isbn);
// creating new UI
const ui = new UI();
//validation
if(title === '' || author === '' || isbn === '') {
ui.showAlert('Pease fill all the fields','error');
}
else {

    //ad book to list
    ui.addBookToList(book);
    ui.showAlert('Book Added!','success')
    // clear fields
    ui.clearFields();

}



e.preventDefault();
})

// delete 
document.getElementById('book-list').addEventListener('click', function(e){
    ui = new UI;
    ui.deleteBook(e.target);
    ui.showAlert('Book Deleted!', 'success')
    e.preventDefault();
})
