<template>
  <div class="instructorsWrapper">
    <ContentsHeader/>
    <ContentsContainer>
      <a-row v-for="(instructor, id) in instructorsList" :key="id" class="instructor-property">
        <CardHeader>
          <p class="card-header">
            <span class="card-header__id">{{ id }}</span>
            <span class="card-header__name">{{ fullName(instructor) }}</span>
            <span  class="card-header__reading">({{ fullNameReading(instructor) }})</span>
          </p>
          <a-button>編集</a-button>
        </CardHeader>
        <a-card :bordered="true">
          <a-col :span="8">
            <ul class="property-list">
              <li>
                <span class="property-list__label">所属</span>
                {{ instructor.defaultArea + '校' }}
              </li>
              <li>
                <span class="property-list__label">メール</span>
                {{ instructor.mail_1 }}
              </li>
              <li v-if="instructor.mail_2">
                <span class="property-list__label mail_2"></span>
                {{ instructor.mail_2 }}
              </li>
              <li>
                <span class="property-list__label">電話</span>
                {{ instructor.tel_1 }}
              </li>
              <li v-if="instructor.tel_2">
                <span class="property-list__label tel_2"></span>
                {{ instructor.tel_2 }}
              </li>
              <li>
                <span class="property-list__label">住所</span>
                {{ instructor.address }}
              </li>
            </ul>
          </a-col>
          <a-col :span="8">
            <p>レッスン予約状況</p>
          </a-col>
        </a-card>
      </a-row>
    </ContentsContainer>
  </div>
</template>

<script>
  import ContentsHeader from '@/components/ContentsHeader'
  import ContentsContainer from '@/components/ContentsContainer'
  import CardHeader from '@/components/CardHeader'
  import Paper from '@/components/Paper'
  import {mapGetters} from 'vuex';
  import _ from 'lodash'

  export default {
    data() {
      return {}
    },
    components: {
      ContentsContainer,
      ContentsHeader,
      CardHeader,
      Paper
    },
    computed: {
      ...mapGetters({
        instructorsList: 'instructors/instructorsList',
        register: 'instructors/register',
      }),
    },
    methods: {
      fullName(instructor) {
        return instructor.firstName + ' ' + instructor.lastName
      },
      fullNameReading(instructor) {
        return instructor.firstNameReading + ' ' + instructor.lastNameReading
      }
    }
  }
</script>

<style lang="postcss" scoped>
  .instructor-property {
    margin-bottom: var(--padding-middle);
  }

  .property-list {
    list-style: none;
    line-height: 20px;
    font-size: 14px;
    padding: 0;

    > li {
      line-height: 25px;
    }

    &__label {
      width: 5em;
      display: inline-block;
      position: relative;

      &:after {
        content: "：";
        position: absolute;
        left: 4em;
      }

      &.mail_2 {
        &:after {
          content: "";
        }
      }

      &.tel_2 {
        &:after {
          content: "";
        }
      }
    }

  }

  .card-header {
    margin: 0;
    &__id {
      font-size: 12px;
    }
  }

  .--green {
    color: green;
  }

  .--red {
    color: red;
  }

</style>

