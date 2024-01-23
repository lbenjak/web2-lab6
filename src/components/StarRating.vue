<template>
  <div class="star-rating">
    <star
      v-for="i in 5"
      :key="i"
      :index="i - 1"
      :filled="i <= currentRating"
      @hover="hoverStar"
      @input="selectRating"
    />
  </div>
</template>

<script>
import Star from '../components/Star.vue';

export default {
  components: {
    Star,
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentRating: this.value,
    };
  },
  methods: {
    hoverStar(rating) {
      // Update the displayed rating when a star is hovered
      this.currentRating = rating;
    },
    selectRating(rating) {
      // Emit the selected rating
      this.$emit('input', rating);
    },
  },
};
</script>

<style scoped>
.star-rating {
  display: flex;
}
</style>
