<template>
    <div style="background-color: #555;">
        <HeaderComponent />
        <MovieComponent :like="true" :active="$route.params.id" :single="true"/>
        <StaffComponent :movie="$route.params.id"/>
        <a href="/movies">Voir tous les films</a>
        <FooterComponent/>
    </div>
</template>


<script>
import HeaderComponent from '@/components/common/HeaderComponent';
import MovieComponent from '@/components/common/MovieComponent';
import StaffComponent from '@/components/common/StaffComponent';
import FooterComponent from '@/components/common/FooterComponent';

export default {
  name: 'Movie',
  components: {
    HeaderComponent,
    MovieComponent,
    StaffComponent,
    FooterComponent,
  },
};
</script>

