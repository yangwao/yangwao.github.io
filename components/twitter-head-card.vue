<template>
  <span v-if="false"></span>
</template>

<script>
// Test on: https://cards-dev.twitter.com/validator
export default {
  data: () => ({
    href: 'https://twitter.com/intent/tweet?url=' + encodeURIComponent('https://head-elements.now.sh/about')
  }),
  head: {
    meta: [
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@yangwao' },
      { name: 'twitter:title', content: 'Matej Nemcek portfolio' },
      { name: 'twitter:description', content: 'matej nemcek portfolio' },
      { name: 'twitter:image', content: 'https://s.gravatar.com/avatar/d31afb47d607e443bbf5f781922407cf?s=80&r=g' },
      { name: 'twitter:image:alt', content: 'Matej Nemcek avatar' }
    ]
  }
}
</script>
