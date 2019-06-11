module.exports = {
  title: 'Life path of Wao',
  description: 'Just playing around',
  plugins: 'clean-urls',
  theme: 'simple',
  themeConfig: {
    author: 'Matej Nemček',
    navbar: { // will display below the title
      about: './about',
      work: './work',
      contact: './contact',
      experience: './experience'
    }
  },
  markdown: {
    lineNumbers: true
  }
}
