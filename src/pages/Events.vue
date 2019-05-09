<template>
    <div style="background-color: #555;">
        <HeaderComponent />
        <EventComponent />
    </div>
</template>


<script>
import HeaderComponent from '@/components/common/HeaderComponent';
import EventComponent from '@/components/common/EventComponent';

export default {
  name: 'Events',
  components: {
    HeaderComponent,
    EventComponent,
  },
};
</script>

