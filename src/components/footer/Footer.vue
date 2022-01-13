<template lang="">
    <div class="footer-content">
        <div class="footer-text">
            <h1>Chronotys.</h1>
            <h4>Faites nous confiance</h4>
            Rejoignez plus de 4 000 startups déjà en croissance avec Chronotys.<br/><br/>
            <div>
                <button class="btn-cmd">Contacter Nous</button>
            </div>
            <div class="copyr">
                <hr />
                <div class="chronotys">
                    <span>© 2022 Chronotys - Tous les drois reservés</span>
                    <ul>
                        <li>Politique de confidentialté</li>
                        <li>Conditions générales</li>
                        <li>Cookies</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Footer",
}
</script>
<style scoped>
    .footer-content{
        width: 100%;
        height: 400px;
        padding-top: 50px;
        background: #FDF5E2;
        text-align: center;
    }
    .footer-text h1{
        font-family: Inter;
        font-style: normal;
        font-weight: 900;
        font-size: 30px;
        line-height: 36px;
        letter-spacing: -0.07em;
        color: #0058DD;
    }
    .footer-content h4{
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 3px;
        color: #101828;
    }
    .copyr{
        margin-top: 80px;
    }
    .copyr hr{
        width: 90%;
        margin-right: 50px;
        border: 0.5px solid rgba(170, 170, 170, 0.5);
    }
    .chronotys{
        display: flex;
        justify-content: space-between;
        color: #aaa;
    }
    .copyr span{
        margin: 1rem;
    }
    .copyr ul{
        display: flex;
    }
    .copyr ul li{
        list-style: none;
        margin: 0.5rem;
    }
</style>