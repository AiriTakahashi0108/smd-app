<template>
  <div>
  <FullCalendar
    default-view="dayGridMonth"
    ref="fullCalendar"
    :locale="locale"
    :header="calendarHeader"
    :weekends="calendarWeekends"
    :plugins="calendarPlugins"
    :eventSources="lessonDate"
    allDayText="講師"
    slotEventOverlap="false"
    @dateClick="handleDateClick"
  />
  </div>
</template>

<script>
  import FullCalendar from '@fullcalendar/vue'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import timeGridPlugin from '@fullcalendar/timegrid'
  import interactionPlugin from '@fullcalendar/interaction'
  import jaLocale from '@fullcalendar/core/locales/ja'
  import _ from 'lodash'

  export default {
    name: "Calendar",
    mounted() {
      // let event = {
      //   title: 'event1',
      //   start: '2020-02-22'
      // }
      //
      // this.lessonDate.events.push(event)
    },
    data() {
      return {
        locale: jaLocale, // 日本語化
        // カレンダーヘッダーのデザイン
        calendarHeader: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        calendarWeekends: true,
        // カレンダーで使用するプラグイン
        calendarPlugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
        ],
        lessonDate: [
          {
            events: [
              {
                title  : 'event1',
                start  : '2020-02-01'
              },
              {
                title  : '内山',
                start  : '2020-02-09T13:30:00',
                end    : '2020-02-09T14:30:00'
              },
              {
                title  : 'えりえり',
                start  : '2020-02-09T12:30:00',
                end    : '2020-02-09T13:30:00'
              },
              {
                title  : 'あいうえお',
                start  : '2020-02-10T12:30:00',
                end    : '2020-02-10T13:30:00'
              }
            ],
            color: 'Skyblue',
            textColor: 'white',
            instructor: 'IBUKI'
          },
          {
            events: [
              {
                title  : 'event1',
                start  : '2020-02-01'
              },
              {
                title  : '内山',
                start  : '2020-02-09T13:30:00',
                end    : '2020-02-09T14:30:00'
              },
              {
                title  : '一関',
                start  : '2020-02-09T12:30:00',
                end    : '2020-02-09T13:30:00'
              },
              {
                title  : '山中',
                start  : '2020-02-11T12:30:00',
                end    : '2020-02-11T13:30:00'
              }
            ],
            color: 'orange',
            textColor: 'white',
            instructor: 'Motoyama'
          }
        ],
      }
    },
    computed: {
    },
    components: {
      FullCalendar,
    }
  }
</script>

<style scoped>

</style>
