# mutations

```js
// mutation
mutation CreateAuthor($name: String!) {
  createAuthor(name: $name) {
    id,
    name
  }
}

// query variables
{
  "name": "Walter Isaacson"
}

```


```js
// mutation
mutation CreatePublisher($name: String!) {
  createPublisher(name: $name) {
    id,
    name
  }
}

// query variables
{
  "name": "Simon & Schuster"
}

// note the output id
```


```js
mutation CreateBook($book: BookInput!) {
  createBook(book: $book) {
    id,
    name,
    publisher {
      name
    }
  }
}

{
  "book": {
    "name": "Steve Jobs",
    "publisherId": "id_received_from_previous_mutation"
  }
}

```