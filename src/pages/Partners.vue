<template>
  <div style="background-color: #F0F0F0; position: relative;">
    <HeaderComponent />
    <div class="overlay"></div>
    <div class="bgNoImage"></div>
    <h2 class="page-title">Nos partenaires</h2>
    <hr class="separator" />
    <Partner />
    <FooterComponent/>
  </div>
</template>


<script>
import HeaderComponent from '@/components/common/HeaderComponent';
import Partner from '@/components/common/Partner';
import FooterComponent from '@/components/common/FooterComponent';

export default {
  name: 'Partners',
  components: {
    HeaderComponent,
    Partner,
    FooterComponent,
  },
};
</script>
