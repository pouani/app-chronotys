<template lang="">
    <div class="client">
        <h3>Il Nous font confiance</h3>
        <div class="client-logo">
            <img src="@/assets/images/EASTERN_PACIFIC_SHIPPING.jpg"/>
            <img src="@/assets/images/SONARA.jpg"/>
            <img src="@/assets/images/BRS_BROKERS.jpg"/>
            <img src="@/assets/images/MENA_ENERGY_DUBAI.png"/>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css">
    .client{
      
        padding: 10px;
    }
    .client h3{
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 17px;
        /* identical to box height */
        text-align: center;
        letter-spacing: -0.02em;
    }
    .client-logo{
        display: flex;
        justify-content: center;
    }
    .client-logo img{
        height: 80px;
        margin: 1rem;
    }
</style>