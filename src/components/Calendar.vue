<template>
  <FullCalendar
    default-view="dayGridMonth"
    :locale="locale"
    :header="calendarHeader"
    :weekends="calendarWeekends"
    :plugins="calendarPlugins"
    :eventSources="eventSources"
    @dateClick="handleDateClick"
  />
</template>

<script>
  import FullCalendar from '@fullcalendar/vue'
  import dayGridPlugin from '@fullcalendar/daygrid'
  import timeGridPlugin from '@fullcalendar/timegrid'
  import interactionPlugin from '@fullcalendar/interaction'
  import jaLocale from '@fullcalendar/core/locales/ja'

  export default {
    name: "Calendar",
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
          interactionPlugin
        ],
        eventSources: [

          // your event source
          {
            events: [ // put the array in the `events` property
              {
                title  : 'event1',
                start  : '2020-01-01'
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
              }
            ],
            color: 'black',     // an option!
            textColor: 'yellow' // an option!
          }

          // any other event sources...

        ]
      }
    },
    components: {
      FullCalendar,
    }
  }
</script>

<style scoped>

</style>
