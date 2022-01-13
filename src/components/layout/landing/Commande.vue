<template lang="">
    <div class="content-commande">
        <div class="commande">
            <h3>
                Besoin de faire livrer votre colis ?
            </h3>
            <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div class="content-btn">
                <button class="btn-cmd">Commander une livraison<i class="fas fa-truck"></i></button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css">
    .content-commande{
        width: 100%;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        background: #0058DD;
    }
    .commande p{
        text-align: center;
        width: 700px;
        font-size: 16px;
        line-height: 26px;
    }
    .commande h3{
        text-align: center;
        font-family: Satoshi;
        font-style: normal;
        font-weight: bold;
        font-size: 44px;
        line-height: 19px;
    }
    .content-btn{
        display: flex;
        justify-content: center;
    }
    .content-btn button{
        background: #F3AF00;
    }
</style>