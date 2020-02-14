<template>
  <div class="cardHeaderWrapper">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "CardHead",

  }
</script>

<style lang="postcss" scoped>
  .cardHeaderWrapper {
    height: 60px;
    margin-bottom: -1px;
    padding: 0 24px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 16px;
    background: var(--background-white);
    border-bottom: 1px solid #e8e8e8;
    border-radius: 2px 2px 0 0;
    zoom: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

</style>
