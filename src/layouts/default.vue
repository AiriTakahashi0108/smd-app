<template>
  <div class="wrapper">
    <BasicNavi/>
    <main class="main-contents">
      <nuxt/>
    </main>
  </div>
</template>

<script>
  import BasicNavi from '@/components/BasicNavi'
  import ContentsContainer from '@/components/ContentsContainer'


  export default {
    name: 'default',
    components: {
      BasicNavi,
      ContentsContainer
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
    display: flex;
    height: 100vh;
  }

  .main-contents {
    width: 100%;
    background: linear-gradient(#96c4ff, #7e89fb);
  }

  :root {
    --basic-font-family: 'Noto Sans JP', sans-serif;

    --background-white: white;
    --background-gray-light: #c7c7c7;
    --background-gray-dark: #2c2c2c;

    --color-red: red;

    --color-blue-dark: #101687;
    --color-lblue: #252c94;

    --text-color-white: white;
    --text-color-black: #202020;
    --text-color-gray-dark: #2d2d2d;
    --text-color-gray: #424242;
    --text-color-gray-ligth: #c9c9c9;

    --padding-middle: 30px;
    --padding-thin: 15px;

  }

  a, a:visited, a:link, a:hover {
    color: inherit;
    text-decoration: none;
  }
</style>
