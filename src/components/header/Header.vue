<template lang="">
    <diV>
        <div class="navbar">
            <router-link to="/" style="text-decoration:none;">
                <h1>Chronotys.</h1>
            </router-link>
            <div class="nav-link">
                <ul class="link">
                    <router-link to="" style="text-decoration:none;">
                        <li>Nos services</li>
                    </router-link>
                    <router-link  to="" style="text-decoration:none;">
                        <li class="active">Domaines d'activité</li>
                    </router-link>
                    <router-link to="" style="text-decoration:none;">
                        <li>A propos de nous</li>
                    </router-link>
                </ul>
            </div>
            <div class="btn">
                <div>
                    <button class="btn-compte">Compte</button>
                    <button v-on:click="toggleModaleC" class="btn-contact">Contacter-nous <span><i class="fas fa-chevron-right"></i></span></button>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>

export default {
    name:"Header",
}
</script>
<style scoped>
    .navbar{
        z-index: 2;
        overflow: hidden;
        position: fixed;
        width: 100%;
        display: flex;
        justify-content: space-between;
        background-color: #FFF9EB;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 1px 0px;
    }
    .btn-flex{
        display: flex;
    }
    /* .btn button.btn-compte:hover .btn-log{
        background: olive;
    } */
    .navbar h1{
        width: 150px;
        height: 36px;
        font-weight: 900;
        font-size: 30px;
        line-height: 30px;
        letter-spacing: -0.07em;
        color: #0058DD;
        padding-left: 8px;
        
    }
    .nav-link{
         display: flex;
         align-items: center;
    }
    .nav-link ul{
        display: flex;
        width: 400px;
       
    }
    .nav-link .link li{
        list-style: none;
        height: 17px;
        margin-right: 1rem;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        color: #3F4352;
        text-decoration: none;
    }
    router-link li{
        text-decoration: none;
        
    }
    .btn{
        padding-right: 8px;
    }
    .btn button{
        margin-top: 10px;
        border: none;
        padding: 20px;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        border-radius: 32px;
        cursor: pointer;
    }
    button.btn-compte{
        background-color: inherit;
    }
    button.btn-contact{
        background-color: #0058DD;
        color: #fff;
    }
    .btn span{
        font-weight: bold;
        transition: ease .5s all;
    }
    .btn .btn-contact:hover span{
        margin-left: 10px;
    }

    .nav-link .link .active{
        color: #0058DD;
    }
</style>