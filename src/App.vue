<template>
  <div id="app">

    <Header :company="company" @changeCompanyName="changeCompanyName($event)"></Header>

    <div  class="container">
      <div class="row">
        <router-view></router-view>
      </div>
    </div>

    <div class="teal-footer">
      <Footer :company="company"></Footer>
    </div>

  </div>
</template>

<script>
import Footer from './components/layouts/Footer.vue'

export default {
  name: 'app',
  data(){
      return {
          company: 'DirectionX',
      }
  },
  methods:{

  },
  components: {
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
  .padding-div{
    padding: 25px;
    background: antiquewhite;
  }
  .is-active{
    color: rgb(255, 68, 10);
  }
</style>
