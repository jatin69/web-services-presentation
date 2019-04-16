# REST - Bookstore

Data Source is [here](./src/book-service.js)

## Endpoints

- [ ] GET `/books` : shows all books
- [ ] GET `/book/{book_id}` : shows book with id

- [ ] GET `/authors` : shows all authors
- [ ] GET `/author/{author_id}` : shows author with id

- [ ] POST `/books`
    ```json
    {
        "name" : "JS Essentials",
        "authors" : [
            "Abra", "Kadabra"
        ]
    }
    ```

- [ ] GET `books/{book_id}/books-by-same-author` : get all books of the author of a book

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