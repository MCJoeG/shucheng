<template>
  <div id="app">
    <HelloWorld/>
    <mt-button @click.native="testClick" style="background:lightblue">点击我测试</mt-button>
  </div>
</template>

<script>
// export default {}
// document.addEventListener('DOMContentLoaded',() => {
// })
import HelloWorld from './components/HelloWorld'
import {Toast} from 'mint-ui'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    testClick () {
      Toast({
        message: 'sad',
        duration: 5000
      })
    }
  }
}
document.addEventListener('DOMContentLoader', () => {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
})
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
