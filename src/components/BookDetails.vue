<template>
  <div class="book-details">
    <img :src="book.coverImage" alt="Book Cover Details" class="book-cover" @error="handleImageError" />
    <div class="info">
      <h3>{{ book.title }}</h3>
      <p>{{ book.author }}</p>
      <p>{{ book.description }}</p>
      <div class="rating">
        <span v-for="(starType, index) in calculateStars()" :key="index" class="star" :class="starType"></span>
      </div>
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
  methods: {
    calculateStars() {
      const fullStars = Math.floor(this.book.rating);
      const hasHalfStar = this.book.rating % 1 >= 0.5;
      const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

      const stars = [];
      for (let i = 0; i < fullStars; i++) {
        stars.push('full-star');
      }
      if (hasHalfStar) {
        stars.push('half-star');
      }
      for (let i = 0; i < emptyStars; i++) {
        stars.push('empty-star');
      }
      return stars;
    },
    handleImageError(event) {
      event.target.src =
        'https://unsplash.com/photos/xG5VJW-7Bio/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8Ym9vayUyMGNvdmVyfGVufDB8fHx8MTcwNjAyMTQ1N3ww&force=true&w=640';
    },
  },
};
</script>

<style scoped>

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


.rating {
  font-size: 1.5rem;
  color: #fdd835; /* Star color */
}

.star {
  margin-right: 2px;
  display: inline-block;
}

.full-star::before {
  content: '\2605';
  color: #fdd835; 
}

.half-star::before {
  content: '\2605'; 
  position: relative;
  display: inline-block;
  width: 50%;
  height: 100%;
  overflow: hidden;
  color: rgba(253, 216, 53, 0.5); 
}

.empty-star::before {
  content: '\2606'; 
  color: rgba(253, 216, 53, 0.3); 
}
</style>