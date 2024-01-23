<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="header-container">
      <div class="brand-info">
        <h1 class="logo">📚</h1>
        <div class="library-name">
          <p>{{ library_name }}</p>
        </div>
      </div>
      <nav class="nav-links">
        <router-link to="/" class="nav-link">Homepage</router-link>
        <router-link to="/catalogue" class="nav-link">Catalogue</router-link>
        <router-link to="/rules" class="nav-link">Rules</router-link>
      </nav>
    </div>
  </header>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      library_name: 'Great Reads',
    };
  },
}
</script>

<style scoped>
header {
  background-color: #2c3e50; /* Header background color */
  color: #ecf0f1; /* Text color */
  padding: 10px 0; /* Top and bottom padding */
}

.header-container {
  max-width: 1200px; /* Limit header width */
  margin: 0 auto; /* Center the header */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand-info {
  display: flex;
  align-items: center;
}

.logo {
  font-size: 2rem;
  margin-right: 10px;
}

.library-name p {
  font-size: 1.2rem;
  margin: 0;
}

.nav-links {
  display: flex;
}

.nav-link {
  margin-right: 15px;
  color: #ecf0f1; /* Link color */
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease; /* Smooth color transition on hover */
}

.nav-link:hover {
  color: #3498db; /* Hover color */
}
</style>
