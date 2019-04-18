<template>
  <div>
    <h1>The Book Store</h1>
    <ol>
      <li v-for="book in books" :key="book.id">
        <div>
          <h3 v-text="book.name"></h3>
          <p v-text="book.publisherId" style="font-style: italics;"></p>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'BookStore',
  props: {
    baseUrl: String
  },
  data() {
    return {
      books: [],
      authors: [],
    }
  },
  methods: {
    allBooks() {
      axios.get(`${this.baseUrl}/books`).then(
        ({data}) => this.books = data
      ).catch(e => alert(e));
    },
    allAuthors() {

    },
    createBook() {

    }
  },
  created() {
    this.allBooks();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
