<template lang="">
    <div class="service">
        <div>
            <h2>Nous vous fournissons 
            la meilleure qualité de services</h2>
            <div class="card-service">
                <div class="card">
                    <img src="@/assets/images/icone1.svg">
                    <h3>Restauration</h3>
                    <p>
                        faites livrer  les plats commandés par vos clients dans les conditions optimales d'hygènes
                    </p>
                </div>
                <div class="card">
                    <img src="@/assets/images/icone2.svg">
                    <h3>Restauration</h3>
                    <p>
                        faites livrer  les plats commandés par vos clients dans les conditions optimales d'hygènes
                    </p>
                </div>
                <div class="card">
                    <img src="@/assets/images/icone2.svg">
                    <h3>Restauration</h3>
                    <p>
                        faites livrer  les plats commandés par vos clients dans les conditions optimales d'hygènes
                    </p>
                </div>
                <div class="card">
                    <img src="@/assets/images/icone1.svg">
                    <h3>Restauration</h3>
                    <p>
                        faites livrer  les plats commandés par vos clients dans les conditions optimales d'hygènes
                    </p>
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
    .service{
        display: flex;
        justify-content: center;
    }
    .service h2{
        font-family: Satoshi;
        font-style: normal;
        font-weight: normal;
        font-size: 48px;
        line-height: 63px;
        /* or 131% */

        letter-spacing: -0.02em;

        /* Gray/400 */

        color: #1E212B;
    }

    .card-service{
        display: grid;
        width: 100%;
        max-width: 750px;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
    }

    .card{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 46px 33px;
        width: 350px;
        height: 200px;
        background: #FFFFFF;
        background: #FFFFFF;
        box-shadow: 0px 0px 4px rgba(98, 98, 98, 0.1);
        transition: all .5s ease;
    }

    .card:hover{
        box-shadow: 0px 32px 60px rgba(98, 98, 98, 0.08);
    }
</style>