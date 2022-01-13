<template>
    <div id="app">
      <Login class="login" 
        v-bind:revele="revele" v-bind:toggleModale="toggleModale"
        
      />
      <Register 
        v-bind:reveleR="reveleR" v-bind:toggleModaleR="toggleModaleR"
      />
      <FormCmd v-bind:reveleC="reveleC" v-bind:toggleModaleC="toggleModaleC"/>
      <Header />
       <div class="btn-forme">
            <button v-on:click="toggleModale" class="btn-log"><span>Se connecter</span><i class="fas fa-user"></i></button><br/>
            <button v-on:click="toggleModaleR"><span>S'inscrire</span><i class="fas fa-user"></i></button>
        </div>
      <router-view />
      <Footer class="footer"/>
    </div>
</template>

<script>
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './components/layout/form/Login.vue';
import Register from './components/layout/form/Register.vue';
import FormCmd from './components/layout/form/FormCmd.vue';

// import { onBeforeMount } from 'vue';
// import { useRouter, useRoute } from 'vue-router';
// import firebase from 'firebase';
export default {
  name: 'App',
  data(){
    return {
      revele: false,
      reveleR: false,
      reveleC: false,
    }
  },
  components: {
    Header,
    Footer,
    Login,
    Register,
    FormCmd,
  },
  methods: {
    toggleModale: function(){
      this.revele = !this.revele
    },
    toggleModaleR: function(){
      this.reveleR = !this.reveleR
    },
    toggleModaleC: function(){
      this.reveleC = !this.reveleC
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&family=Poppins:wght@200&display=swap');
#app {
  font-family: "inter", sans-serif;
  color: #2c3e50;
}
.footer{
  position: absolute;
  align-items: flex-end;
  top: 500%;
}
.btn-forme{
        z-index: 3;
        padding: 10px;
        position: absolute;
        top: 50px;
        left: 80%;
        background: #FFFFFF;
        box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.08);
        border-radius: 12px;
        
    }
    .btn-forme button{
        width: 140px;
        height: 45px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: none;
        border-radius: 12px;
        background-color: inherit;
    }
    
    .btn-forme button:hover{
        background: #F2F3F4;
    }
    .btn-compte{
      background: red;
    }

</style>
