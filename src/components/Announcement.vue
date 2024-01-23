<template>
  <div class="announcement-container" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <div class="announcement-content">
      <h3>{{ announcement.title }}</h3>
      <p v-if="announcementLength > announcementLengthLimit" class="announcement-length-warning">This announcement is quite long!</p>
      <p>{{ announcement.text }}</p>
    </div>
    <div class="announcement-details" v-if="showDetails">
      <span>Author: {{ announcement.author }}</span>
      <span>Date: {{ formatAnnouncementDate(announcement.date) }}</span>
    </div>
    <SpotReservation :availableSpots="availableSpots" @spotReserved="handleSpotReserved" />
  </div>
</template>

<script>
import SpotReservation from '../components/SpotReservation.vue';
import { useAnnouncementStore } from '../stores/announcementStore'; 

export default {
  components: {
    SpotReservation,
  },
  props: {
    announcement: Object,
  },
  data() {
    return {
      showDetails: false,
      announcementLengthLimit: 300,
    };
  },
  computed: {
    announcementLength() {
      return this.announcement.text.length;
    },
    availableSpots() {
      const announcementStore = useAnnouncementStore();
      return announcementStore.getAvailableSpots(this.announcement.id);
    },
  },
  methods: {
    handleMouseEnter() {
      this.showDetails = true;
    },
    handleMouseLeave() {
      this.showDetails = false;
    },
    handleSpotReserved() {
      const announcementStore = useAnnouncementStore();
      announcementStore.reserveSpot(this.announcement.id);
    },
    formatAnnouncementDate(dateString) {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    },
  },
};
</script>

<style scoped>
/* Add your styles for the announcement component here */

.announcement-container {
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f8f9fa; /* Gentle background color */
  transition: background-color 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.announcement-container:hover {
  background-color: #e2e6ea; /* Background color on hover */
}

.announcement-content {
  margin-bottom: 10px;
}

h3 {
  margin: 0;
}

.announcement-details {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #6c757d;
  width: 100%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.announcement-container:hover .announcement-details {
  opacity: 1;
}

.announcement-length-warning {
  color: #dc3545; 
  font-weight: bold;
  margin-top: 10px;
}
</style>
