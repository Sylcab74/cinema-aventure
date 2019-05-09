<template>
    <footer>
        <nav>
            <ul class="menu">
                <li v-for="footerLink in footerLinks" :key="footerLink.id">
                    <a :href="footerLink.link">
                        {{ footerLink.title }}
                    </a>
                </li>
            </ul>
        </nav>
        <ul class="socialList">
            <li v-for="social in socials" :key="social.id">
                <a :href="social.link">
                    <div class="socialOverlay"></div>
                    <img :src="social.src" :alt="social.alt">
                </a>
            </li>
        </ul>
        <p class="copyright">{{ copyright }}</p>
    </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      link: '/',
      copyright: '© 2019 LES ÉCRANS DE L\'AVENTURE. All Rights Reserved. Muffin group',
      footerLinks: [
        {
          id: 1,
          title: 'Contact',
          link: '#',
        },
        {
          id: 2,
          title: 'Publications récentes',
          link: '#',
        },
        {
          id: 3,
          title: 'Nos cinémas',
          link: '#',
        },
      ],
      socials: [
        {
          id: 1,
          link: '#',
          src: './static/images/facebookLogo.svg',
          alt: 'Facebook',
        },
        {
          id: 2,
          link: '#',
          src: './static/images/twitterLogo.svg',
          alt: 'Twitter',
        },
        {
          id: 3,
          link: '#',
          src: './static/images/youtubeLogo.svg',
          alt: 'Youtube',
        },
      ],
    };
  },
};
</script>

