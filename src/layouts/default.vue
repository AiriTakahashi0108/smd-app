<template>
  <div class="wrapper">
    <main class="main-contents">
      <BasicNavi />
      <nuxt />
    </main>
  </div>
</template>

<script>
  import BasicHeader from '@/components/BasicHeader.vue'
  import BasicNavi from '@/components/BasicNavi'

  export default {
    name: 'default',
    components: {
      BasicNavi,
      BasicHeader
    },
    head: {
      link: [
        {
          href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap',
          ref: 'stylesheet',
        },
      ],
    },
  }

</script>

<style lang="postcss">
  .wrapper {
    overflow: hidden;
    font-family: var(--basic-font-family);
  }
  .main-contents {
    display: flex;
    height: 100vh;
    border-top: 1px solid gray;
  }

  :root {
    --basic-font-family: 'Noto Sans JP', sans-serif;

    --background-wihte: white;
    --background-gray-light: #c7c7c7;

    --color-red: red;

    --color-blue-dark: #101687;
    --color-lblue: #252c94;

    --text-color-white: white;
    --text-color-black: #202020;
    --text-color-gray-dark: #2d2d2d;
    --text-color-gray: #424242;
    --text-color-gray-ligth: #c9c9c9;
  }

  a, a:visited, a:link, a:hover {
    color: inherit;
    text-decoration: none;
  }
</style>
