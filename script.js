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
    '0.9.0 (Latest)': {
      link: '/'
    }
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
        }
      ]
    }
  ]
})
