<template>
  <div class="Paper">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "Paper"
  }
</script>

<style scoped>
  .Paper {
    border-radius: 5px;
    background: var(--background-white);
    padding: var(--padding-middle);
  }
</style>
