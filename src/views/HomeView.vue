<template>
  <div class="homepage">
    <section class="most-borrowed">
      <h2>Top Three Most Borrowed Books</h2>
      <div v-if="loading">Loading...</div>
      <div v-else class="book-card-container">
        <div v-for="book in mostBorrowedBooks" :key="book.id" class="book-card">
          <book-details :book="book" />
        </div>
      </div>
    </section>

    <section class="announcements">
      <h2>Announcements</h2>
      <ul>
        <announcement v-for="announcement in announcements" :key="announcement.id" :announcement="announcement" />
      </ul>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import BookDetails from '../components/BookDetails.vue';
import Announcement from '../components/Announcement.vue';
import { useAnnouncementStore } from '../stores/announcementStore.js';


export default {
  components: {
    BookDetails,
    Announcement
  },
  data() {
    return {
      loading: true,
      mostBorrowedBooks: [],
      announcements: [],
    };
  },
  mounted() {
    this.fetchMostBorrowedBooks();
    this.fetchAnnouncements();
  },
  methods: {
    async fetchMostBorrowedBooks() {
      try {
        const response = await axios.get('https://run.mocky.io/v3/5c3fb7d2-f19e-4f12-be0a-45639198c0e3');
        this.mostBorrowedBooks = response.data;
      } catch (error) {
        console.error('Error fetching most borrowed books:', error);
      } finally {
        this.loading = false;
      }
    },
    async fetchAnnouncements() {
      try {
        const response = await axios.get('https://run.mocky.io/v3/a6f16d98-5d36-42b7-be4c-dc9a5d8b0b7e');
        this.announcements = response.data;

        const announcementStore = useAnnouncementStore();
        this.announcements.forEach((announcement) => {
          announcementStore.addAnnouncement(announcement);
        });
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
    },
  },
};
</script>


<style scoped>

.header {
  background-color: var(--primary-color);
  color: white;
  text-align: center;
  padding: 20px;
}

.most-borrowed {
  margin-top: 30px;
}

.book-card-container {
  display: flex;
  overflow-x: auto; /* Enable horizontal scrolling if there are more than three books */
}

.book-card {
  flex: 0 0 auto;
  margin-right: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  width: calc((100% - 40px) / 3); /* Calculate width based on available space and margins */
}

.book-card img {
  width: 100%;
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