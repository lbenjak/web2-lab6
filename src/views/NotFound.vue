<!-- NotFound.vue -->

<template>
  <div class="not-found">
    <h1>404 - Not Found</h1>
    <p>Oops! The page you are looking for might be in another library...</p>
    <router-link to="/">Go back to the 🏠 page</router-link>
  </div>
</template>

<script>
export default {
  // You can add component-specific logic here if needed
};
</script>

<style scoped>
/* Add your styles for the Not Found component here */

.not-found {
  text-align: center;
  margin-top: 50px;
}

h1 {
  font-size: 4em;
  color: #ff6347; /* Tomato color */
}

p {
  font-size: 1.5em;
  color: #666;
  margin-top: 20px;
}

router-link {
  font-size: 1.2em;
  color: #3498db; /* Dodger Blue color */
  text-decoration: underline;
  cursor: pointer;
  margin-top: 20px;
}
</style>
