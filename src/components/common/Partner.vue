<template>
    <div class="partners">
        <div v-for="(partner, index) in partners" :partner="partner" :key="index" class="partner">
          <a :href="partner.link">
          <img :src="partner.src" :alt="partner.alt">
          <h2 class="title">{{partner.title}}</h2>
          <p class="description">{{partner.description}}</p>
          </a>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Partner',
  props: [
    'partner',
  ],
  data() {
    return {
      partners: [
        {
          src: './static/images/affiche.jpg',
          alt: 'Festival du film d\'aventure',
          title: 'Festival de Dijon',
          description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.',
          link: '#',
        },
        {
          src: './static/images/affiche.jpg',
          alt: 'Festival du film fantastique',
          title: 'Festival d\'Annecy',
          description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.',
          link: '#',
        },
        {
          src: './static/images/affiche.jpg',
          alt: 'Festival du film fantastique',
          title: 'Festival d\'Annecy',
          description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.',
          link: '#',
        },
        {
          src: './static/images/affiche.jpg',
          alt: 'Festival du film fantastique',
          title: 'Festival d\'Annecy',
          description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.',
          link: '#',
        },
        {
          src: './static/images/affiche.jpg',
          alt: 'Festival du film fantastique',
          title: 'Festival d\'Annecy',
          description: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.',
          link: '#',
        },
      ],
    };
  },
};
</script>

