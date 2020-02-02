<template>
  <div class="navWrapper">
    <header class="header">
      <img class="logo-1" src='~/assets/img/smd-logo_1.png' alt='SMDボーカル教室-ロゴ'>
      <img class="logo-2" src='~/assets/img/smd-logo_2.png' alt='SMDボーカル教室-ロゴ'>
    </header>
    <nav>
      <ul class="nav-list">
        <nuxt-link :class="['nav-item', {'--isActive' : $nuxt.$route.path==='/'}]" to="/">
          <a-icon type="calendar" class="nav-icon"/>
          スケジュール
        </nuxt-link>
        <nuxt-link :class="['nav-item', {'--isActive' : $nuxt.$route.path==='/users'}]" to="/users">
          <a-icon type="user" class="nav-icon"/>
          従業員情報
        </nuxt-link>
        <nuxt-link :class="['nav-item', {'--isActive' : $nuxt.$route.path==='/client'}]" to="/client">
          <a-icon type="team" class="nav-icon"/>
          生徒情報
        </nuxt-link>
        <nuxt-link :class="['nav-item', {'--isActive' : $nuxt.$route.path==='/payment'}]" to="/payment">
          <a-icon type="credit-card" class="nav-icon"/>
          決済管理
        </nuxt-link>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
  }
</script>

<style lang="postcss" scoped>

  .navWrapper {
    width: 200px;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 30px 0 10px;
  }

  .logo-1 {
    transform: scale(0.8);
    width: 100px;
  }

  .logo-2 {
    margin-top: -10px;
    transform: scale(0.5);
  }

  .nav-list {
    border-top: 1px solid #C7C7C7;
    border-bottom: 1px solid #C7C7C7;
    padding: 0;
    color: var(--text-color-white);
    background: var(--background-gray-dark);
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: 500;
    height: 100vh;
    padding-top: 10px;
  }

  .nav-item {
    line-height: 50px;
    text-align: left;
    letter-spacing: 1.3;
    transition: 0.3s;
    opacity: 0.6;
    line-height: 1.5;
    padding: 30px 30px;

    &:hover {
      opacity: 1;
    }
  }

  .nav-icon {
    line-height: 1.8;
    font-weight: 200;
    margin-right:5px;
  }

  .--isActive {
    opacity: 1;
  }
</style>
