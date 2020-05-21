<template>
    <div class="ebook-reader">
        <div id="read"></div>
    </div>
</template>

<script>
import Epub from 'epubjs'
import {mapState} from 'vuex'
global.epub = Epub
export default {
  computed: {
    ...mapState(['fileName'])
  },
  methods: {
    initEpub () {
      this.$store.dispatch('setFileName', this.$route.params.fileName.split('|').join('/'))
      this.book = new Epub('http://localhost:808/epub/' + this.fileName + '.epub')
      console.log(this.book)
      this.rendition = this.book.renderTo('read', {
        width: innerWidth,
        height: innerHeight,
        method: 'default'
      })
      console.log(this.rendition)
      this.rendition.display()
    }
  },
  mounted () {
    this.initEpub()
  }
}
</script>

<style lang="scss" rel="stylesheet/scsss" scoped>

</style>
