<template>
    <div style="background-color: #555;">
        <HeaderComponent />
        <MapComponent />
        <PriceComponent />
        <FooterComponent/>
    </div>
</template>


<script>
import HeaderComponent from '@/components/common/HeaderComponent';
import PriceComponent from '@/components/common/PriceComponent';
import MapComponent from '@/components/common/MapComponent';
import FooterComponent from '@/components/common/FooterComponent';

export default {
  name: 'Access',
  components: {
    HeaderComponent,
    MapComponent,
    PriceComponent,
    FooterComponent,
  },
};
</script>

