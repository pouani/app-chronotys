<template lang="">
    <div class="bloc-log" v-if="reveleR">  
         
        <form class="overlay" @submit.prevent="onSubmit">
            <button @click="getUser">Appel</button> <br/>
            <button @click="SignOut">Se deconnecter</button>
            <div>
                <div class="btn-modal" v-on:click="toggleModaleR">X</div>
                <h3>Inscription</h3>
                <p>Connecter vous a votre espace client</p>
                <input placeholder="Nom & Prenom" v-model="form.name"/><br/>
                <input placeholder="Email" v-model="form.email"/><br/>
                <input placeholder="Mot de passe" v-model="form.password"/><br />
                <button >S'inscrire</button>
            </div>
        </form>
    </div>
</template>
<script>
import {register, userProfil, updateUser, logOut} from '@/firebase'
import { reactive } from 'vue'
export default {
    name: "Register",
    props: ['reveleR','toggleModaleR'],
     setup(){
       const form = reactive({name: '', email: '', password: ''})
         const getUser = async () =>{
           const user = userProfil();
           console.log(user);
       }
       const onSubmit = async () => {
           await register({ ...form })
           form.email = ''
           form.password = ''
       }

        const update = async () => {
            await updateUser()
        }
       const SignOut = ()=>{
           logOut();
       }
       return { form, onSubmit, getUser, SignOut, update  }

      
   }
}
</script>
<style scoped>
    .bloc-log{
      z-index: 4;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

    }
    .overlay{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(242, 243, 244, 0.7);
        backdrop-filter: blur(40px);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .overlay h3{
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 39px;
        /* identical to box height */
        color: #0058DD;
        letter-spacing: -0.04em;
    }
    .overlay input{
        width: 340px;
        height: 32px;
        margin: 1rem;
        padding: 15px;
        border: none;
        outline: none;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
        border-radius: 91px;
    }

    .overlay button{
        width: 360px;
        height: 55px;
        padding: 20px;
        border: none;
        border-radius: 32px;
        color: #fff;
        background: #0058DD;
    }
    .btn-modal{
        width: 52px;
        height: 48px;
        position: absolute;
        right: 70px;
        top: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        cursor: pointer;
        background: #FFFFFF;
        box-shadow: 0px 7px 24px rgba(0, 0, 0, 0.08);
        border-radius: 16px;
    }
</style>