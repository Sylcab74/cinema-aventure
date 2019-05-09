<template>
    <div style="background-color: #555;">
        <HeaderComponent />
        <MovieForm />
    </div>
</template>


<script>
import HeaderComponent from '@/components/common/HeaderComponent';
import MovieForm from '@/components/common/MovieForm';

export default {
  name: 'RegisterMovies',
  components: {
    HeaderComponent,
    MovieForm,
  },
};
</script>

