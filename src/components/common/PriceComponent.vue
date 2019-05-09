<template>
  <div class="price">
    <h2>Tarifs des entrées : </h2>
    <div class="priceBlockContainer">
      <div class="priceBlock" v-for="price in prices" :key="price.id">
      <h3>{{ price.title }}</h3>
      <ul>
        <li class="prices" v-for="(price,index) in price.price" :key="index">
          {{ price }}
        </li>
      </ul>
    </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'PriceComponent',
  data() {
    return {
      prices: [
        {
          id: 1,
          title: 'Du jeudi au samedi, au cinéma OLYMPIA',
          price: ['4,50 € PAR DEMI-JOURNEE', '6,50 € pass soirée', 'Enfants de moins de 12 ans : 2,50 € (demi-journée ou soirée)'],
        },
        {
          id: 2,
          title: 'Le dimanche au cinéma DARCY',
          price: ['4,50 € PAR DEMI-JOURNEE', '6,50 € pass soirée', 'Enfants de moins de 12 ans : 2,50 € (demi-journée ou soirée)'],
        },
        {
          id: 3,
          title: 'Billetterie ouverte, à partir du 15 septembre, au cinéma Olympia',
          price: ['4,50 € PAR DEMI-JOURNEE', '6,50 € pass soirée', 'Enfants de moins de 12 ans : 2,50 € (demi-journée ou soirée)'],
        },
        {
          id: 4,
          title: 'Groupes scolaires : ',
          price: ['4,50 € PAR DEMI-JOURNEE', '6,50 € pass soirée', 'Enfants de moins de 12 ans : 2,50 € (demi-journée ou soirée)'],
        },
      ],
    };
  },
};
</script>

