<template>
  <div id="app">
    <div  class="container">
      <Header :company="company" @changeCompanyName="changeCompanyName($event)"></Header>

      <div class="row">
        <div class="col-md-6">
          <Ninja :ninjas="ninjas"></Ninja>
        </div>

        <div class="col-md-6">
          <component :is="component" v-on:redirectToEmit="redirectToOn($event)"></component>
        </div>

      </div>
    </div>

    <div class="teal-footer">
      <Footer :company="company"></Footer>
    </div>

  </div>
</template>

<script>
import Ninja from './components/Ninja.vue'
import Footer from './components/Footer.vue'
import LoginForm from './components/forms/LoginForm.vue';
import RegisterForm from './components/forms/RegisterForm.vue';

export default {
  name: 'app',
  data(){
      return {
          component: 'LoginForm',
          company: 'DirectionX',
          ninjas: [
              {
                  name: 'Naruto',
                  status: true,
                  description: 'Naruto Uzumaki is the titular protagonist of the series. He was the first character created by Kishimoto during the conception of the series'
              },
              {
                  name: 'Kakashi',
                  status: true,
                  description: 'Kakashi Hatake (Hatake Kakashi) is the leader of Team 7 and the sensei to Naruto, Sasuke, and Sakura.'
              },
              {
                  name: 'Akatsuki',
                  status: true,
                  description: 'Akatsuki is an organization of criminal ninja that serves as the primary antagonistic force of the second part of the Naruto series.'
              },
              {
                  name: 'Nagato',
                  status: true,
                  description: 'Nagato, primarily known under the alias of Pain, is the recognized leader of Akatsuki and partner of Konan, with Obito acting as his benefactor.'
              },
              {
                  name: 'Obito',
                  status: true,
                  description: 'Obito Uchiha, also known under his alias Tobi is the true leader of Akatsuki and the primary antagonist for most of Part II. '
              },
          ]
      }
  },
  methods:{
      changeCompanyName(title){
          this.company = title;
      },

      redirectTo(path){
        this.component = path
      },

      redirectToOn(data){
          this.component = data
      }
  },
  components: {
    Ninja,
    Footer,
    LoginForm,
    RegisterForm
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
  margin-top: 60px;
}
</style>
