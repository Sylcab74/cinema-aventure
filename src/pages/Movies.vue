<template>
    <div style="background-color: #555;">
        <HeaderComponent />
        <div class="overlay"></div>
        <MovieComponent :showMore="true" />
        <SliderComponent />
        <FooterComponent/>
    </div>
</template>


<script>
import HeaderComponent from '@/components/common/HeaderComponent';
import MovieComponent from '@/components/common/MovieComponent';
import SliderComponent from '@/components/common/SliderComponent';
import FooterComponent from '@/components/common/FooterComponent';

export default {
  name: 'Movies',
  components: {
    HeaderComponent,
    MovieComponent,
    SliderComponent,
    FooterComponent,
  },
};
</script>

