<template>
  <div>
    <div class="events">
      <vue-cal :events="events" locale="fr" class="vuecal--green-theme" hide-view-selector :time="false" default-view="week" style="height:500px;" :on-event-click="onEventClick">
      <i slot="arrow-prev" aria-hidden="true" class="v-icon material-icons">&lt;</i>
      <i slot="arrow-next" aria-hidden="true" class="v-icon material-icons">&gt;</i>
      </vue-cal>
      <div class="modal-content" v-if="showDialog" style="margin-top: 20px;">
        <div class="modal-header">
          <span class="close" @click="closeEvent">&times;</span>
          <h2>{{ selectedEvent.title }}</h2>
        </div>
        <div class="modal-body">
          <p v-html="selectedEvent.contentFull"></p>
          <p>Event starts at: {{ selectedEvent.startTime }}</p>
          <p>Event ends at: {{ selectedEvent.endTime }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';

export default {
  name: 'EventComponents',
  components: { VueCal },
  data: () => ({
    selectedEvent: {},
    showDialog: false,
    events: [
      {
        start: '2019-05-05 10:00',
        end: '2019-05-05 15:00',
        title: 'Film',
        content: '<span>Texte</span>',
        contentFull: 'test',
        class: 'film',
      },
      {
        start: '2019-05-20 15:00',
        end: '2019-05-20 21:00',
        title: 'Film',
        content: '<span>Texte</span>',
        class: 'film',
      },
      {
        start: '2019-05-15 12:00',
        end: '2019-05-15 18:00',
        title: 'Film',
        content: '<span>Cinéma</span>',
        class: 'film',
      },
    ],
  }),
  methods: {
    onEventClick(event, e) {
      this.selectedEvent = event;
      this.showDialog = true;

      // Prevent navigating to narrower view (default vue-cal behavior).
      e.stopPropagation();
    },
    closeEvent() {
      this.showDialog = false;
    },
  },
};
</script>

