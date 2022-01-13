<template lang="">
    <div class="bloc-log" v-if="reveleC" >
        <div class="overlay" >
            <div>
                <div class="btn-modal" v-on:click="toggleModaleC">X</div>
                <h3>Livraison</h3>
                <p>Lancer une nouvelle livraison</p>
                <input type="text" placeholder="Votre Nom" v-model="nom"/>
                <input type="text" placeholder="votre telephone" v-model="phone"/><br />
                <input type="text" placeholder="adresse de livraison du destinataire"/>
                <input type="text" placeholder="nom du colis"/><br/>
                <input type="text" placeholder="volume de la livraison"/>
                <input type="text" placeholder="desciption du colis"/><br/>
                <input type="text" placeholder="Montant a percevoir apres livraison"/>
                <input type="date" /><br/>
                <input type="submit" value="Se Connecter"/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "FormCmd",
    props: ['reveleC','toggleModaleC'],
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

    .overlay input[type=submit]{
        width: 360px;
        height: 55px;
        padding: 20px;
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