<template lang="">
    <div class="activite">
        <img src="@/assets/images/Group6.svg" class="imgleft"/>
        <div class="content">
            <div>
                <h3>Domaine d’activité</h3>
                <div class="text-d">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac aenean sit posuere donec malesuada enim urna pellentesque. Turpis varius elementum eget facilisis tellus.
                        </p>
                </div>
                <div class="nameDomaine">
                    <div class="secteur">
                        <div class="secteur-text">
                            <img src="@/assets/images/icone3.svg"/>
                            <div>
                                <h4>Restauration</h4>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac aenean sit posuere donec malesuada enim urna pellentesque.
                                </div>
                        </div>
                        <div class="secteur-text">
                            <img src="@/assets/images/icone3.svg"/>
                            <div>
                                <h4>Restauration</h4>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac aenean sit posuere donec malesuada enim urna pellentesque.
                                </div>
                        </div>
                        <div class="secteur-text">
                            <img src="@/assets/images/icone3.svg"/>
                            <div>
                                <h4>Restauration</h4>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac aenean sit posuere donec malesuada enim urna pellentesque.
                            </div>
                        </div>
                    </div>
                    <div class="secteur-img">
                        <div class="secteur-img1">
                            <button class="btn-cmd">Commander une livraison<i class="fas fa-truck"></i></button>
                        </div>
                        <div class="secteur-img2">
                            <button class="btn-cmd">Commander une livraison<i class="fas fa-truck"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css">
    .activite{
        position: relative;
        overflow: hidden;
        margin-top: 10px;
        height: 653px;
        background-color: #FDF5E2; 
    }
    .activite .imgleft{
        z-index: -5px;
        position: absolute;
        width: 984px;
        height: 984px;
        right: -492px;
        
    }
    .activite h3{
        position: relative;
        top: 30px;
        font-family: Satoshi;
        font-style: normal;
        font-weight: bold;
        margin-top: 20px;
        font-size: 44px;
         text-align: center;
        color: #3A2A00;
    }
    .text-d p{
        width: 419px;
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        text-align: center;
        color: #3F4352;
    }
    .text-d{
        display: flex;
        justify-content: center;
    }
    .nameDomaine{
        display: flex;
    }
    .secteur{
        padding-top: 70px;
    }
    .secteur .secteur-text{
        
        display: flex;
          width: 419px;
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        color: #3F4352;
        margin: 1rem;
    }
    .secteur-img{
        display: flex;
    }
    .secteur-text div{
        margin-left: 20px;
    }
    .secteur-img1, .secteur-img2{
        position: relative;
        width: 243px;
        height: 438px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem;
        background: #3F4352;
    }
    .secteur-img2{
         background-image:
        linear-gradient(rgba(65, 65, 65, 0.52), rgba(63, 59, 62, 0.493)),
        url('../../../assets/images/why-us.jpg');
        background-size: 240%;
        background-position: center;
        background-repeat: no-repeat;
        transition: all .4s ease;
    }
     .secteur-img1{
        background-image:
        linear-gradient(rgba(65, 65, 65, 0.52), rgba(63, 59, 62, 0.493)),
        url('../../../assets/images/2.jpg');
        background-size: 270%;
        background-position: center;
        background-repeat: no-repeat;
        transition: all .4s ease;
    }
    .secteur-img1:hover{
        background-size: 300%;
    }
    .secteur-img1:hover button{
        display: block;
    }
    .secteur-img2:hover{
        background-size: 300%;
    }
    .secteur-img2:hover button{
        display: block;
    }
    .secteur-img button{
        display: none;
    }
    .content{
        display: flex;
        justify-content: center;
    }
</style>