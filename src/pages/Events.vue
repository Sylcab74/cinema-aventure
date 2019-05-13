<template>
    <div style="background-color: #555;position: relative">
        <HeaderComponent />
        <EventComponent />
        <FooterComponent/>
    </div>
</template>


<script>
import HeaderComponent from '@/components/common/HeaderComponent';
import EventComponent from '@/components/common/EventComponent';
import FooterComponent from '@/components/common/FooterComponent';

export default {
  name: 'Events',
  components: {
    HeaderComponent,
    EventComponent,
    FooterComponent,
  },
};
</script>

