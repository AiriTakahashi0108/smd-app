<template>
  <div class='headerWrapper'>
    <ul v-for="(naviLink, index) in headNaviLink" :key="index" class="link-list">
      <li class="link-item">
        <nuxt-link to="naviLink.href">{{naviLink.name}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    data () {
      return {

      }
    },
    props: {
      headNaviLink: Array
    },
  }

</script>

<style lang="postcss" scoped>

  .headerWrapper {
    padding: var(--padding-middle)
  }

  .link-list {
    list-style: none;
    display: flex;
    flex-direction: initial;
  }

  .link-item {
    padding: 0 20px;
    font-size: 18px;
  }

</style>

