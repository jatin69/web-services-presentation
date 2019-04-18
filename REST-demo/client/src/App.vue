<template>
  <div id="app">
    <BookStore baseUrl="http://localhost:5000/api/v1"/>
  </div>
</template>

<script>
import BookStore from './components/BookStore.vue'

export default {
  name: 'app',
  components: {
    BookStore
  }
}
</script>

<style>

</style>
