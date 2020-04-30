/* globals Docute */

new Docute({
  target: '#docute',
  sourcePath: './docs/',
  title: 'API Guidelines',
  layout: 'narrow',
  detectSystemDarkTheme: true,
  darkThemeToggler: true,
  editLinkBase: 'https://github.com/michaelnetter/api-guidelines/tree/master/docs',
  editLinkText: 'Edit this page on GitHub',
  router: {
    mode: 'history'
  },
  detectSystemDarkTheme: true,
  darkThemeToggler: true,
  versions: {
    '1.0.0 (Latest)': {
      link: '/'
    },
    '0.9.0': {
      link: 'https://raw.githubusercontent.com/michaelnetter/api-guidelines/v0.9.0/docs'
    },
  },
  nav: [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'API reference',
      link: 'https://dracoon.team/api'
    }
  ],
  sidebar: [
    {
      title: 'Guide',
      children: [
        {
          title: 'Introduction',
          link: '/'
        },
        {
          title: 'Customization',
          link: '/about'
        },
        {
          title: 'Ladida',
          link: '/about'
        }
      ]
    }
  ]
})
