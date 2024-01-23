<template>
  <div class="announcement-container" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <div class="announcement-box">
      <h3>{{ announcement.title }}</h3>
      <p>{{ announcement.text }}</p>
    </div>
    <p v-if="announcementLength > announcementLengthLimit" class="announcement-length-warning">This announcement is quite long!</p>
    <div v-if="showDetails" class="additional-details">
      <span>Author: {{ announcement.author }}</span>
      <span>Date: {{ formatAnnouncementDate(announcement.date) }}</span>
    </div>
  </div>
</template>

<script>
export default {
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
  },
  methods: {
    handleMouseEnter() {
      this.showDetails = true;
    },
    handleMouseLeave() {
      this.showDetails = false;
    },
    formatAnnouncementDate(dateString) {
      // Add custom date formatting logic here
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
}

.announcement-container:hover {
  background-color: #e2e6ea; /* Background color on hover */
}

.announcement-box {
  margin-bottom: 10px;
}

h3 {
  margin: 0;
}

.announcement-length-warning {
  color: #dc3545; 
  font-weight: bold;
  margin-top: 10px;
}

.additional-details {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #6c757d;
  margin-top: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.announcement-container:hover .additional-details {
  opacity: 1;
}
</style>
