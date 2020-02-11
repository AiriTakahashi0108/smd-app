<template>
  <div class="instructorsWrapper">
    <ContentsHeader/>
    <ContentsContainer>
        <a-row v-for="(student, id) in studentsList" :key="id" class="student-property">
        <a-card :title="studentProperty(student, id)" :bordered="false">
          <a-col :span="10">
            <ul class="property-list">
              <li>
                <span class="list-label">所属</span>
                {{ student.defaultArea + '校' }}
              </li>
              <li>
                <span class="list-label">メール</span>
                {{ student.mail_1 }}
              </li>
              <li v-if="student.mail_2">
                <span class="list-label mail"></span>
                {{ student.mail_2 }}
              </li>
              <li>
                <span class="list-label">電話</span>
                {{ student.tel_1 }}
              </li>
              <li v-if="student.tel_2">
                <span class="list-label tel"></span>
                {{ student.tel_2 }}
              </li>
              <li>
                <span class="list-label">住所</span>
                {{ student.address }}
              </li>
              <li>
                <span class="list-label">決済方法</span>
                {{ student.paymentRegister }}
              </li>
              <li>
                <span class="list-label">決済情報</span>
                <span :class="[ student.payment ? '--green' : '--red']">{{ student.payment ? '決済完了' : '未納月があります' }}</span>
              </li>
            </ul>
          </a-col>
          <a-col :span="8">
            <p>card content</p>
          </a-col>
          <a-col :span="6">
            <p>card content</p>
          </a-col>
        </a-card>
        </a-row>
    </ContentsContainer>
  </div>
</template>

<script>
  import ContentsHeader from '@/components/ContentsHeader'
  import ContentsContainer from '@/components/ContentsContainer'
  import Paper from '@/components/Paper'
  import {mapGetters} from "vuex";

  export default {
    data() {
      return {}
    },
    components: {
      ContentsContainer,
      ContentsHeader,
      Paper
    },
    computed: {
      ...mapGetters({
        studentsList: 'students/studentsList',
        register: 'students/register',
      })
    },
    methods: {
      studentProperty(student, id) {
        const threeDigitID = ('000' + id).slice(-3)
        const fullName = student.firstName + ' ' + student.lastName
        const fullNameReading = student.firstNameReading + ' ' + student.lastNameReading

        return threeDigitID + '　' + fullName + ' ' + '(' + fullNameReading + ')'
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
  }

  .list-label {
    width: 5em;
    display: inline-block;
    position: relative;
    &:after {
      content:"：";
      position: absolute;
      left: 4em;
    }
    &.mail {
      &:after {
        content:"";
      }
    }
    &.tel {
      &:after {
        content:"";
      }
    }
  }

  .--green {
    color: green;
  }

  .--red {
    color: red;
  }

</style>

