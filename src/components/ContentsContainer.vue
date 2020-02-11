<template>
  <div class="contentsWrapper">
    <slot/>
  </div>
</template>

<style lang="postcss" scoped>
  .contentsWrapper {
    width: 100%;
    height: 100vh;
    overflow: scroll;
    padding: var(--padding-middle);
  }
</style>
