<template>
  <div class="instructorsWrapper">
    <ContentsHeader/>
    <ContentsContainer>
      <a-row v-for="(student, id) in studentsList" :key="id" class="student-property">
        <CardHeader>
          <p class="card-header">
            <span class="card-header__id">{{ threeDigitID(id) }}</span>
            <span class="card-header__name">{{ fullName(student) }}</span>
            <span class="card-header__reading">({{ fullNameReading(student) }})</span>
          </p>
          <a-button>編集</a-button>
        </CardHeader>
        <a-card :bordered="true">
          <a-col :span="8">
            <ul class="property-list">
              <li>
                <span class="property-list__label">所属</span>
                {{ student.defaultArea + '校' }}
              </li>
              <li>
                <span class="property-list__label">メール</span>
                {{ student.mail_1 }}
              </li>
              <li v-if="student.mail_2">
                <span class="property-list__label mail_2"></span>
                {{ student.mail_2 }}
              </li>
              <li>
                <span class="property-list__label">電話</span>
                {{ student.tel_1 }}
              </li>
              <li v-if="student.tel_2">
                <span class="property-list__label tel_2"></span>
                {{ student.tel_2 }}
              </li>
              <li>
                <span class="property-list__label">住所</span>
                {{ student.address }}
              </li>
              <li>
                <span class="property-list__label">決済方法</span>
                {{ student.paymentRegister }}
              </li>
              <li>
                <span class="property-list__label">決済情報</span>
                <span v-if="!student.payment[0]" class="--green">決済完了</span>
                <p v-if="student.payment[0]" class="--red" style="display: inline-block">
                  <span v-for="month in student.payment">{{month}}月</span>
                  が未納です
                </p>
              </li>
            </ul>
          </a-col>
          <a-col :span="8">
            <p>レッスン予約状況</p>
            <span v-if="!student.lessonReservation[0]" class="--red">次回レッスンが入っていません</span>
            <p v-if="student.lessonReservation[0]">
              <ol>
                <li v-for="(Reservation, i) in student.lessonReservation" :key="i">
                  {{Reservation}}
                </li>
              </ol>
            </p>
          </a-col>
          <a-col :span="6">
            <p>備考</p>
            <span v-if="!student.remarks">- 無し -</span>
            <span v-if="student.remarks">{{student.remarks}}</span>
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
  import _ from 'lodash';

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
        studentsList: 'students/studentsList',
        register: 'students/register',
      }),
    },
    methods: {
      sliceID(id) {
        return id.slice(1)
      },
      threeDigitID(id) {
        id = this.sliceID(id)
        return _.padStart(id, 2, '0')
      },
      fullName(student) {
        return student.firstName + ' ' + student.lastName
      },
      fullNameReading(student) {
        return student.firstNameReading + ' ' + student.lastNameReading
      }
    }
  }
</script>

<style lang="postcss" scoped>
  .student-property {
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

