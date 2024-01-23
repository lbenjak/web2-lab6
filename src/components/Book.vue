<template>
  <div class="book">
    <div class="book-details"></div>
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
.book {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  display: flex;
  align-items: center;
}

.book-details {
  flex-grow: 1;
}
</style>
