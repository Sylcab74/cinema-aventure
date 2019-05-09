<template>
    <div style="background-color: #555;">
        <HeaderComponent />
        <div class="overlay"></div>
        <div class="bgNoImage"></div>
        <MovieForm />
        <FooterComponent/>
    </div>
</template>


<script>
import HeaderComponent from '@/components/common/HeaderComponent';
import MovieForm from '@/components/common/MovieForm';
import FooterComponent from '@/components/common/FooterComponent';

export default {
  name: 'RegisterMovies',
  components: {
    HeaderComponent,
    MovieForm,
    FooterComponent,
  },
};
</script>

