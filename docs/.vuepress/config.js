module.exports = {
  title: 'Life path of Wao',
  description: 'Just playing around',
  plugins: 'clean-urls',
  theme: 'simple',
  themeConfig: {
    author: 'Matej Nemček',
    navbar: {
      about: '/about',
      work: '/work',
      contact: '/contact',
      experience: '/experience',
      podcast: '/podcast'
    }
  },
  markdown: {
    lineNumbers: true
  }
}
