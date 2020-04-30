/* globals Docute */

new Docute({
  target: '#docute',
  sourcePath: './docs/',
  title: 'API Guidelines',
  darkThemeToggler: 'true',
  layout: 'left',
  nav: [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'About',
      link: '/about'
    }
  ],
  sidebar: [
    {
      title: 'Guide',
      links: [
        {
          title: 'Introduction',
          link: '/introduction'
        },
        {
          title: 'Installation',
          link: '/installation'
        }
      ]
    }
  ]
})
