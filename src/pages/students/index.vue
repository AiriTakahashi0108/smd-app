<template>
  <div class="instructorsWrapper">
    <contentsContainer>
      <Paper>
        生徒
      </Paper>
    </contentsContainer>
  </div>
</template>

<script>
  import ContentsContainer from '@/components/ContentsContainer'
  import Paper from '@/components/Paper'

  export default {
    data() {
      return {
      }
    },
    components: {
      ContentsContainer,
      Paper
    }
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

