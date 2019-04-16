# REST - Bookstore

Data Source is [here](./book-service.js)

## Endpoints

- [ ] GET `/books` : shows all books
- [ ] GET `/book?id='xxx'` : shows book with id

- [ ] GET `/authors` : shows all authors
- [ ] GET `/author?id='xxx'` : shows author with id

- [ ] POST `/books/createBook`
    ```json
    {
        "name" : "JS Essentials",
        "authors" : [
            "Abra", "Kadabra"
        ]
    }
    ```

- [ ] GET `all-books-of-the-author-of-a-book?bookid="xxx"` : get all books of the author of a book

## Demo Flow

- get all books
- get `all authors`
- get `a book`
- create `a book`
- get `all books`
- get `all books` of the `author` of `a book`

## Pain points

- different route URLs for all requests
- new routes for new demands
- multiple requests for complex queries