<template lang="">
    <div class="info">
        <div class="header-text">
            <div class="text">
                <hr />
                <span>Chronotys votre agence de livraison</span>
            </div>
            <h2>Nous accompagnons les E-commerçants de toutes tailles </h2>
            <p>À travers des livraisons plus rapides et plus efficaces pour faire vivre à leurs clients une expérience inouïe.</p>
             <button class="btn-cmd">Commander une livraison<i class="fas fa-truck"></i></button>
        </div>
        <div class="img-shadow">
            <div class="shadow"></div>
            <div class="img"></div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css">
i{
    margin-left: 8px;
    transition: all .5s ease;
}
.btn-cmd:hover i{
    margin-left: 15px;
}
   .info{
       display: flex;
       flex-wrap: wrap;
       padding: 10px;
   }
   .header-text{
       position: relative;
       top: 150px;
   }
    hr{
        margin-top: 10px;
        margin-right: 5px;
        width: 71px;
        height: 0px;
        border: 1px solid #F3AF00;
    }
    .text{
        display: flex;
        width: 335px;
    }
    h2{
        width: 610px;
        height: 189px;
        font-weight: bold;
        font-size: 56px;
        line-height: 63px;
        letter-spacing: -0.03em;
        color: #1E212B;
    }
    .header-text p{
        width: 435px;
        height: 84px;
        font-weight: normal;
        font-size: 18px;
        line-height: 28px;
        color: #3C3C3C;
    }
    .btn-cmd{
        border: none;
        height: 45px;
        padding: 15px;
        border-radius: 32px;
        background-color: #0058DD;
        color: #fff;
        cursor: pointer;
    }
    .shadow{
        position: relative;
        top: 340px;
        width: 377px;
        height: 295px;
        background: #0058DD;
    }
    .img{
        position: relative;
        top: -240px;
        left: 40px;
        width: 417.33px;
        height: 500.92px;
        background-image:
        linear-gradient(rgba(65, 65, 65, 0.52), rgba(41, 35, 39, 0.73)),
        url('../../../assets/images/1.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
    }
</style>