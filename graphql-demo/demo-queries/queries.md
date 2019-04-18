# Queries

```js
{
  books{
    name
  }
}
```

```js
{
  book(id: "clean-code") {
    name
    authors {
      name
      books {
        name
      }
    }
  }
}
```