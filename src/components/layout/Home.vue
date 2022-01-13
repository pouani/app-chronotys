<template lang="">
    <div>
        <div class="header">
            <img src="@/assets/images/Group6.svg" class="imgleft"/>
            <img src="@/assets/images/Group7.svg" class="imgright"/>
            <div class="info-component">
             <Info />
            </div>
        </div>
        <div class="landing">
            <Client />
            <Service />
            <Activitee />
            <Commande />
            <Contact />
        </div>
    </div>
</template>
<script>
import Info from './landing/Info.vue'
import Client from './landing/Client.vue'
import Service from './landing/Service.vue'
import Activitee from './landing/Activitee.vue'
import Commande from './landing/Commande.vue'
import Contact from './landing/Contact';
export default {
    components :{
        Info,
        Client,
        Service,
        Activitee,
        Commande,
        Contact,
    }
}
</script>
<style lang="css">
    .header{
        position: absolute;
        overflow: hidden;
        width: 100%;
        height: 655px;
        left: 0px;
        top: 0px;
        display: inline-block;
        background-color:  #FFF9EB;
    }
    .header .imgleft{
        z-index: -5px;
        position: absolute;
        width: 984px;
        height: 984px;
        left: -492px;
        top: -275px;
    }
    .header .imgright{
        z-index: -5px;
        position: absolute;
        overflow: hidden;
        width: 946px;
        height: 946px;
        left: 967px;
        top: 263px;
    }
   
    .info-component{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .landing{
        position: relative;
        top: 650px;
    }
</style>