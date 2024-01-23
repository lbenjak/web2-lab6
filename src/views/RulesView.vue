<template>
  <div class="rules-view">
    <section class="rule-section">
      <h2>Library Hours</h2>
      <p>The library is open from 9 AM to 6 PM, Monday to Friday.</p>
    </section>

    <section class="rule-section">
      <h2>Borrowing Rules</h2>
      <ul>
        <li>Members can borrow up to 3 books at a time.</li>
        <li>Loan period is 14 days, with an option to renew if no one else has reserved the book.</li>
        <li>Return books on time to avoid late fees.</li>
      </ul>
    </section>

    <section class="rule-section">
      <h2>Library Etiquette</h2>
      <ul>
        <li>Keep the library quiet and respectful for others.</li>
        <li>No food or drinks in the library.</li>
        <li>Use headphones when listening to audio.</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'RulesView',
};
</script>

<style scoped>

.rules-view {
  max-width: 800px;
  margin: 0 auto;
}

.rule-section {
  margin-bottom: 30px;
}

h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}

li {
  margin-bottom: 8px;
}
</style>
