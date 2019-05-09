<template>
    <header id='header'>
        <nav>
            <a class="logo" :href="link">
                <img :src="image.src" alt="Logo">
            </a>
            <ul class="menu">
                <li v-for="headerLink in headerLinks" :key="headerLink.id">
                    <a :href="headerLink.link">
                        {{ headerLink.title }}
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      link: '/',
      headerLinks: [
        {
          id: 1,
          title: 'Présentation',
          link: '/movies',
        },
        {
          id: 2,
          title: 'Infos pratiques',
          link: '/access',
        },
        {
          id: 3,
          title: 'Programme',
          link: '/events',
        },
        {
          id: 4,
          title: 'Nos partenaires',
          link: '/partners',
        },
        {
          id: 5,
          title: 'Inscrire un film',
          link: '/register',
        },
        {
          id: 6,
          title: 'Archives',
          link: '/movies',
        },
      ],
      image: {
        id: 1,
        src: '/static/images/logo.png',
      },
    };
  },
};
</script>

