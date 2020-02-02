<template>
  <div class="navWrapper">
    <aside>
      <header>
        <img class="logo-1" src='~/assets/img/smd-logo_1.png' alt='SMDボーカル教室-ロゴ'>
        <img class="logo-2" src='~/assets/img/smd-logo_2.png' alt='SMDボーカル教室-ロゴ'>
      </header>
      <nav>
        <ul class="nav-list">
          <nuxt-link :class="['nav-item', {'--isActive' : $nuxt.$route.path==='/'}]" to="/">スケジュール
            <a-icon type="calendar" class="nav-icon"/>
          </nuxt-link>
          <nuxt-link :class="['nav-item', {'--isActive' : $nuxt.$route.path==='/users'}]" to="/users">従業員情報
            <a-icon type="user" class="nav-icon"/>
          </nuxt-link>
          <nuxt-link :class="['nav-item', {'--isActive' : $nuxt.$route.path==='/client'}]" to="/client">生徒情報
            <a-icon type="team" class="nav-icon"/>
          </nuxt-link>
          <nuxt-link :class="['nav-item', {'--isActive' : $nuxt.$route.path==='/payment'}]" to="/payment">決済管理
            <a-icon type="credit-card" class="nav-icon"/>
          </nuxt-link>
        </ul>
      </nav>
    </aside>
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
    height: 100px;
    width: 180px;
    display: flex;
    justify-content: center;

  }

  .logo-1 {
    transform: scale(0.8);
  }

  .logo-2 {
    transform: scale(0.5);
  }

  .nav-list {
    border-top: 1px solid #C7C7C7;
    border-bottom: 1px solid #C7C7C7;
    padding: 0;
    color: var(--text-color-gray-dark);
    background: var(--background-gray-light);
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-size: 14px;
  }

  .nav-item {
    padding-top: 20px;
    line-height: 50px;
    text-align: center;
    letter-spacing: 1.3;
    display: flex;
    flex-direction: column;
    transition: 0.3s;
    opacity: 0.7;
    line-height: 1.5;

    &:hover {
      opacity: 1;
    }
  }

  .nav-icon {
    font-size: 40px;
    line-height: 1.8;
    font-weight: 400;
  }

  .--isActive {
    opacity: 1;
  }
</style>
