<template>
  <div
    class="star"
    @mouseover="hoverStar(index + 1)"
    @click="selectRating(index + 1)"
  >
    <i :class="{ 'fas': filled, 'far': !filled }">&#9733;</i>
  </div>
</template>

<script>
export default {
  props: {
    filled: Boolean,
    index: Number,
  },
  methods: {
    hoverStar(rating) {
      this.$emit('hover', rating);
    },
    selectRating(rating) {
      this.$emit('input', rating);
    },
  },
};
</script>

<style scoped>
.star {
  cursor: pointer;
  font-size: 24px;
  margin: 0 5px;
  transition: transform 0.2s;
}

.star:hover {
  transform: scale(1.2);
}
</style>
