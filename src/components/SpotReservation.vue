<template>
  <div class="spot-reservation">
    <p>
      Available Spots: {{ availableSpots }}
    </p>
    <button @click="reserveSpot" :disabled="isButtonDisabled">Reserve a Spot</button>
  </div>
</template>

<script>
export default {
  props: {
    availableSpots: Number,
  },
  methods: {
    reserveSpot() {
      this.$emit('spotReserved');
    },
  },
  computed: {
    isButtonDisabled() {
      return this.availableSpots === 0;
    },
  },
};
</script>

<style scoped>
.spot-reservation {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f8f9fa;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  padding: 8px 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 8px;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
