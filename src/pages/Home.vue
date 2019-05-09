<template>
  <div>
    <HeaderComponent />
    <HomeCarouselComponent />
  </div>
</template>


<script>
import HeaderComponent from '@/components/common/HeaderComponent';
import HomeCarouselComponent from '@/components/HomeCarousel';

export default {
  name: 'Home',
  components: {
    HeaderComponent,
    HomeCarouselComponent,
  },
};
</script>
