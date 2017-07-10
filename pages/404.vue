<template>
  <section class="container">
    <div>
      <CanvasDots/>
      <Avatar/>
      <h1 class="title">
        Matej Nemček
      </h1>
      <h2 class="subtitle">
        ⚡️ dump of my 💖 🕓
      </h2>
      <div class="links">
        ##
        <a href="https://github.com/yangwao" target="_blank" class="button--grey">GitHub</a>
        <a href="https://twitter.com/yangwao" target="_blank" class="button--grey">Twitter</a>
        <a href="https://sk.linkedin.com/in/mnemcek" target="_blank" class="button--grey">Linkedin</a>
        <a href="https://www.instagram.com/yangwao/" target="_blank" class="button--grey">Instagram</a>
      </div>
      ### My decent & 🔐🔏 communication channels
      * My Scuttlebutt true name is @NaDXehMSIgk08W5RXZJ0p+7m+19iIWEuAtD7FRESJX8=.ed25519
      * My miniLock ID: 2A8Y2hLRMYgMWxJ9rqFeMsTMn8ppCUzA4TQCumvG9CuQr8 (learn at minilock.io)
      * ⫸  emojilock
      ⚽️🐋👉🔋🔮💰👆⭐️✂️📌🐗🚡🎮⌛️😭🍇🐚🚧🍫😎🚥💉🎨🔉👰➡️👫🌽🔨📼🏀👽


      ## Gained knowledge so far
      AWS - EC2, Cloudfront, S3, Lambda
      GCP - Compute
      *[GCP]: Google Cloud Platform
      Javascript - Node.js, Express.js, Vue.js, ES5, ES6, FlowType, StandardJS
      🔐 Cryptography - Public-key, DH, Sealed Boxes, Authenticated Encryption, Password hashing, Stream ciphers












      ##


      ### As (FullStack) Developer I learned

      ### Want to learn 🔭







      ###

      ### Captain.log













































      ### end credits

      ### random aww


      I'm ssc-first

    </div>
  </section>
</template>

<script>
// import VueMarkdown from 'vue-markdown'
import Avatar from '~components/avatar.vue'
import CanvasDots from '~components/CanvasDots.vue'
import TwitterHeadCard from '~components/twitter-head-card.vue'

export default {
  head: {
    title: '👋👨‍💻 Matej Nemček 🚀🔐🤘',
    meta: [
      { hid: 'About Matej Nemcek', name: 'About Matej Nemcek experience', content: 'About Matej Nemcek' }
    ]
  },
  components: {
    // VueMarkdown,
    Avatar,
    CanvasDots,
    TwitterHeadCard
  }
}
</script>

<style>
@import '~bulma/css/bulma.css';

.container
{
  /*min-height: 100vh;*/
  display: flex;
  justify-content: left;
  align-items: left;
  text-align: left;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
