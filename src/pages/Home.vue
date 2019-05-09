<template>
  <div>
    <HeaderComponent />
    <HomeCarouselComponent />
    <FooterComponent/>
  </div>
</template>


<script>
import HeaderComponent from '@/components/common/HeaderComponent';
import HomeCarouselComponent from '@/components/HomeCarousel';
import FooterComponent from '@/components/common/FooterComponent';

export default {
  name: 'Home',
  components: {
    HeaderComponent,
    HomeCarouselComponent,
    FooterComponent,
  },
};
</script>
