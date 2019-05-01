<template>
    <div>
        <HeaderComponent />
        <MovieComponent />
    </div>
</template>


<script>
import HeaderComponent from '@/components/common/HeaderComponent';
import MovieComponent from '@/components/common/MovieComponent';

export default {
  name: 'Movies',
  components: {
    HeaderComponent,
    MovieComponent,
  },
};
</script>
