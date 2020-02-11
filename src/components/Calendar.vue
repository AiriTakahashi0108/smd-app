<template>
  <FullCalendar
    default-view="dayGridMonth"
    :locale="locale"
    :header="calendarHeader"
    :weekends="calendarWeekends"
    :plugins="calendarPlugins"
    :events="calendarEvents"
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
      }
    },
    components: {
      FullCalendar,
    }
  }
</script>

<style scoped>

</style>
