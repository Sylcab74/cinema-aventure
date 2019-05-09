<template>
    <div style="background-color: #555;">
        <HeaderComponent />

        <MovieComponent :showMore="true" />
        <SliderComponent />
    </div>
</template>


<script>
import HeaderComponent from '@/components/common/HeaderComponent';
import MovieComponent from '@/components/common/MovieComponent';
import SliderComponent from '@/components/common/SliderComponent';

export default {
  name: 'Movies',
  components: {
    HeaderComponent,
    MovieComponent,
    SliderComponent,
  },
};
</script>

