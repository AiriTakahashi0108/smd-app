<template>
  <div class="studentsWrapper">
    <ContentsContainer>
      <div>kkkkk</div>
    </ContentsContainer>
  </div>
</template>

<script>
  import ContentsContainer from '@/components/ContentsContainer'
  import mapGetters from 'vuex';

  export default {
    data() {
      return {}
    },
    components: {
      ContentsContainer,
    },
    computed: {
      ...mapGetters({
        studentsList: 'students/studentsList',
        register: 'students/register',
      })
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

