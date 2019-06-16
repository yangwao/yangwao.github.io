module.exports = {
  title: 'Life path of Wao',
  description: 'Long time no see, life reflection',
  plugins: ['clean-urls', {normalSuffix: ''}],
  theme: 'simple',
  themeConfig: {
    author: 'Matej Nemček',
    navbar: {
      experience: '/experience',
      work: '/work',
      production: '/production',
      contact: '/contact',
      about: '/about'
    }
  }
}
