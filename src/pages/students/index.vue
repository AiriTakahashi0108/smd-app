<template>
  <div class="studentsWrapper">
    <ContentsContainer>
      <div>kkkkk</div>
    </ContentsContainer>
  </div>
</template>

<script>

  export default {
    data() {
      return {}
    },
    computed: {
      clientList() {
        return this.$store.state.clientList.clientList
      }
    },
  }
</script>

<style lang="postcss" scoped>
  .client-list {
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding: 15px;
    margin-bottom: 20px;
    &__item {
      list-style: none;
      line-height: 20px;
      font-size: 14px;
      &.id {

      }
      &.name {
        font-weight: 500;
        font-size: 18px;
        line-height: 23px;
      }
      &.name-reading {

      }
      &.mail {

      }
      &.tel {

      }
      &.address {

      }
      &.payment {

      }
      &.payment-register {

      }
      &.lesson {

      }
      &.remarks {

      }
    }
  }
</style>

