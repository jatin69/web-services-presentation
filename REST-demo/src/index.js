const app = require('express')();
const bookService = require('./repositories/book-service')();
const bodyParser = require('body-parser');
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/api/v1/books', (req, res) => {
    bookService.createBook(req.body).then(book => res.send(book));
});

app.get('/api/v1/books', (req, res) => {
    bookService.getBooks().then(books => res.send(books));
});

app.get('/api/v1/books/:id', (req, res) => {
    const book_id = req.params.id;
    console.log("Requested for book ID: ", book_id);
    bookService.getBook(book_id).then(books => res.send(books));
});

app.get('/api/v1/author/:id', (req, res) => {
    bookService.getAuthor(req.query.id).then(books => res.send(books));
});

app.get('/api/v1/authors', (req, res) => {
    bookService.getAuthors().then(books => res.send(books));
});

app.listen(PORT, () => console.log(`Service runnig on port ${PORT}`));