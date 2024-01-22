<!-- BookDetails.vue -->
<template>
  <div class="book-details">
    <img :src="book.coverImage" alt="Book Cover" class="book-cover" />
    <div class="info">
      <h3>{{ book.title }}</h3>
      <p>{{ book.author }}</p>
      <p>{{ book.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add your styles for the book details component here */

.book-details {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.book-cover {
  width: 120px;
  height: 160px;
  object-fit: cover;
  margin-right: 15px;
}

.info {
  flex-grow: 1;
}

.info h3 {
  margin: 0;
}
</style>
