<template>
  <div>

    <ul class="client-list" v-for="(client, index) in clientList" :key="client.id">
      <li class="client-list__item id">{{ client.id }}</li>
      <li class="client-list__item name">{{ client.firstName + ' ' + client.lastName }}</li>
      <li class="client-list__item name-reading">{{ client.firstNameReading + ' ' + client.lastNameReading }}</li>
      <li class="client-list__item mail">{{ client.mail }}</li>
      <li class="client-list__item tel">{{ client.tel_1 }}</li>
      <li class="client-list__item tel" v-if="client.tel_2">{{ client.tel_2 }}</li>
      <li class="client-list__item address">{{ client.address }}</li>
      <li class="client-list__item payment">{{ client.payment }}</li>
      <li class="client-list__item payment-register">{{ client.paymentRegister }}</li>
      <li class="client-list__item lesson">
        <ol>
          <li v-for="lessonDay in client.lessonReservation">{{lessonDay}}</li>
        </ol>
      </li>
      <li class="client-list__item remarks" v-if="client.remarks">{{ client.remarks }}</li>
    </ul>
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

