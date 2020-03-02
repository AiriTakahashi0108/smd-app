<template>
  <div>
    <vue-cal
      default-view="month"
      :disable-views="['years', 'year']"
      locale='ja'
      :time-step="30"
      :time-from="8 * 60"
      today-button
      :events="fullLessonDate"
      show-all-day-events
      sticky-split-labels="true"
      :split-days="splitDays"
      min-split-width="130"
    >
      <template v-slot:cell-content="{ cell, view, events }" >
        <p>{{cell.content}}</p>
        <div v-for="(event, index) in events" :class="['vuecal__cell-content', event.classes]">
          <template v-if="view.id === 'month' && index === 0 || event.title !== events[index - 1].title">
            <span class="vuecal__cell-date">{{event.title}}</span>
            <span class="vuecal__cell-events-count">{{lessonCount(event.title, events)}}</span>
          </template>
        </div>
      </template>
    </vue-cal>
  </div>
</template>

<script>
  import VueCal from 'vue-cal'
  import {mapGetters} from 'vuex';
  import 'vue-cal/dist/i18n/ja.js'

  import _ from 'lodash'

  export default {
    name: "Calendar",
    components: {
      VueCal,
    },
    mounted() {
      _.forIn(this.lessonData, (lessons, key) => {
        _.forEach(lessons, (lesson, index) => {
          this.$set(lessons[index], 'title', this.instructorsList[key].firstName)
          this.$set(lessons[index], 'class', this.instructorsList[key].class)
        })
      })
    },
    data() {
      return {
        selectedEvent: {},
        showDialog: false,
        splitDays: [
          {id: 1, class: 'a-st', label: 'Ast'},
          {id: 2, class: 'b-st', label: 'Bst'},
        ],
        lessonData: {
          N1: [
            {
              start: '2020-02-25',
              end: '2020-02-25',
              content: 'レッスン',
              contentFull: '備考:月謝もらってください',
              allDay: true
            },
            {
              start: '2020-02-25 10:30',
              end: '2020-02-25 11:30',
              content: '内山',
              contentFull: '備考:月謝もらってください',
              split: 1,
            },
            {
              start: '2020-02-26 10:30',
              end: '2020-02-26 11:30',
              content: '山中',
              split: 2,
            },
            {
              start: '2020-02-26 10:30',
              end: '2020-02-26 11:30',
              content: '内山',
              split: 2,
            },
          ],
          N2: [
            {
              start: '2020-02-16 10:30',
              end: '2020-02-16 11:30',
              content: '一関',
              split: 2,
            },
            {
              start: '2020-02-26 15:30',
              end: '2020-02-26 16:30',
              content: '内山',
              split: 2,
            },
          ],
        }
      }
    },
    computed: {
      ...mapGetters({
        instructorsList: 'instructors/instructorsList',
      }),
      fullLessonDate() {
        return _.concat(..._.values(this.lessonData))
      },
    },
    methods: {
      dayInstructors(events) {
        return _.uniq(_.map(events, function(event){ return event.title }) )
      },
      lessonCount(instructor, events) {
        return _.filter(events, function(event) { return  event.title === instructor }).length
      }
    }
  }
</script>

<style scoped>

</style>
