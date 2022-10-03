module.exports = {
  title: 'Life path of yangWao',
  description: 'Long time no see, life reflection',
  themeConfig: {
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Portfolio', 
        children: ['/investment_thesis', '/portfolio.md', '/subhouse.md'] 
      },
      {
        text: 'Experienced',
        children: ['Experience.md', 'work.md', 'production.md', 'writings.md']
      },
      {
        text: 'About',
        children: ['about.md', 'contact.md']
      },
    ]
  }
}
