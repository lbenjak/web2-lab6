<template>
  <div class="book" @click="selectBook">
    <!-- Book details rendering here -->
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
  methods: {
    selectBook() {
      // Emit the event when a book is selected
      this.$emit("bookSelected", this.book);
    },
  },
};
</script>

<style scoped>
/* Scoped styles for the book component */
.book {
  /* Your styling here */
  cursor: pointer;
}
</style>
