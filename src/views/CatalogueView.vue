<template>
  <div>
    <h2>Catalogue</h2>
    <div class="catalogue">
      <div v-for="book in catalogue" :key="book.id" :book="book">
        <book-details :book="book" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Book from '../components/Book.vue';
import BookDetails from '../components/BookDetails.vue'; 


export default {
  data() {
    return {
      catalogue: [],
    };
  },
  components: {
    Book,
    BookDetails,
  },
  async created() {
    try {
      const response = await axios.get('https://run.mocky.io/v3/68bdc0f2-e08b-4ea8-9b99-fc9b4385f128');
      this.catalogue = response.data;
    } catch (error) {
      console.error('Error fetching catalogue:', error);
    }
  },
};
</script>
