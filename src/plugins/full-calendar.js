import Vue from 'vue'

// TODO:FullCalendarが反映されていないので、後ほど解決

import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import FullCalendarInteraction from '@fullcalendar/interaction';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

Vue.use(FullCalendar)
Vue.use(dayGridPlugin)
Vue.use(FullCalendarInteraction)

export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarPlugins: [ dayGridPlugin ]
    }
  }
}

