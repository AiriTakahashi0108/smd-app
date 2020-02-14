<template>
  <div class='headerWrapper'>

<!--    <ul class="link-list">-->
<!--      <li v-for="(naviLink, index) in headNaviLink" :key="index" class="link-item">-->
<!--        <nuxt-link :to="naviLink.href">{{naviLink.name}}</nuxt-link>-->
<!--      </li>-->
<!--    </ul>-->
  </div>
</template>

<script>

  export default {
    data () {
      return {

      }
    },
    // props: {
    //   headNaviLink: Array
    // },
  }

</script>

<style lang="postcss" scoped>

  .headerWrapper {
    width: 100%;
    height: 70px;
    background-color: var(--background-gray-light);
  }

  /*.link-list {*/
  /*  list-style: none;*/
  /*  display: flex;*/
  /*}*/

  /*.link-item {*/
  /*  padding: 0 20px;*/
  /*  font-size: 18px;*/
  /*}*/

</style>

