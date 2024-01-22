<template>
    <h3>Overdue Fee Calculator</h3>
    <form>
      <div class="TBD">
        <label for="celsius" class="TBD">Days of Overdue</label>
        <div class="col-TBD">
          <input
            type="number"
            class="TBD"
            placeholder=0
            v-model.number="nesto"
            @keyup="c2f"
          />
        </div>
      </div>
    </form>
</template>


<script>
export default {
  data() {
    return {
      tempCelsius: 0,
      tempFahrenheit: 32,
    };
  },
  methods: {
    c2f() {
      this.tempFahrenheit = Math.round((this.tempCelsius * 9) / 5 + 32);
    }
  },
};
</script>
