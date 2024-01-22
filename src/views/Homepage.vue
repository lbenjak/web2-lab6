<template>
  <div class="homepage">
    <header class="header">
      <!-- <navbar/> -->
      <h1>{{ libraryName }}</h1>
    </header>

    <section class="most-borrowed">
      <h2>Top Three Most Borrowed Books</h2>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div v-for="book in mostBorrowedBooks" :key="book.id" class="book-card">
          <book-details :book="book" />
        </div>
      </div>
    </section>

    <section class="announcements">
      <h2>Announcements</h2>
      <ul>
        <li v-for="announcement in announcements" :key="announcement.id">{{ announcement.text }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import BookDetails from '../components/BookDetails.vue'; 

export default {
  components: {
    BookDetails,
  },
  data() {
    return {
      libraryName: 'Tranquil Tales Exchange',
      loading: true,
      mostBorrowedBooks: [],
      announcements: [
        { id: 1, text: 'Join our Book Club every Saturday at 3 PM!' },
        { id: 2, text: 'New arrivals in the Science Fiction section!' },
      ],
    };
  },
  mounted() {
    this.fetchMostBorrowedBooks();
  },
  methods: {
    async fetchMostBorrowedBooks() {
      try {
        const response = await axios.get('https://run.mocky.io/v3/68bdc0f2-e08b-4ea8-9b99-fc9b4385f128');
        this.mostBorrowedBooks = response.data;
      } catch (error) {
        console.error('Error fetching most borrowed books:', error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>


<style scoped>
/* Add your styles for the homepage components here */

/* .homepage {
  max-width: 800px;
  margin: 0 auto;
} */

.header {
  background-color: var(--primary-color);
  color: white;
  text-align: center;
  padding: 20px;
}

.most-borrowed {
  margin-top: 30px;
}

.book-card {
  display: flex;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.book-card img {
  width: 120px;
  height: 160px;
  object-fit: cover;
}

.book-details {
  padding: 10px;
}

.book-details h3 {
  margin: 0;
}

.announcements {
  margin-top: 30px;
}

.announcements ul {
  list-style-type: none;
  padding: 0;
}

.announcements li {
  margin-bottom: 10px;
}
</style>