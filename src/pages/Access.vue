<template>
    <div style="background-color: #555;">
        <HeaderComponent />
        <MapComponent />
        <PriceComponent />
    </div>
</template>


<script>
import HeaderComponent from '@/components/common/HeaderComponent';
import PriceComponent from '@/components/common/PriceComponent';
import MapComponent from '@/components/common/MapComponent';

export default {
  name: 'Access',
  components: {
    HeaderComponent,
    MapComponent,
    PriceComponent,
  },
};
</script>

