<template lang="">
    <div class="content-contact">
        <div class="contact">
            <div>
                <h4>Contacter nous</h4>
                <div class="card-contact">
                    <img src="@/assets/images/icone3.svg"/>
                    <div>
                        <h3>Siege Social</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac aenean sit posuere donec malesuada enim urna pellentesque.
                        </p>
                    </div>
                </div>
                <div class="card-contact">
                    <img src="@/assets/images/icone3.svg"/>
                    <div>
                        <h3>Email</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac aenean sit posuere donec malesuada enim urna pellentesque.
                        </p>
                    </div>
                </div>
                <div class="card-contact">
                    <img src="@/assets/images/icone3.svg"/>
                    <div>
                        <h3>Telephone</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac aenean sit posuere donec malesuada enim urna pellentesque.
                        </p>
                    </div>
                </div>
            </div>
            <div class="form-contact">
                <form>
                    <input type="text" placeholder="Nom & Prénom"/><br/>
                    <input type="email" placeholder="Adresse Email" required/><br/>
                    <input type="text" placeholder="Objet" required/><br/>
                    <textarea placeholder="message"></textarea>
                    <input type="submit" value="Soumettre"/>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .content-contact{
        display: flex;
        justify-content: center;
    }
    .contact{
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 65px;
    }
    .contact h4{
        font-family: Satoshi;
        font-style: normal;
        font-weight: bold;
        font-size: 44px;
        color: #1E212B;
        margin-left: 25px;
    }
    .card-contact{
        display: flex;
        width: 419px;
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        color: #3F4352;
        margin: 1rem;
    }
     .card-contact div{
        margin-left: 20px;
    }
    .form-contact{
        width: 462px;
        height: 550px;
        margin-top: 20px;
        background: #FFFFFF;
        border: 1px solid #F2F3F4;
        box-sizing: border-box;
        box-shadow: 0px 40px 60px rgba(0, 88, 221, 0.1);
        border-radius: 8px;
    }
    .form-contact form{
        width: 100%;
    }
    .contact .form-contact textarea, input{
        width: 85%;
        height: 35px;
        background: #F2F3F4;
        border: none;
        border-radius: 4px;
        outline: none;
        padding:15px;
        margin: 1rem;
    }
    .contact .form-contact textarea{
        height: 90px;
    }
    .contact .form-contact input[type=submit]{
        width: 90%;
        height: 45px;
        border-radius: 32px;
        cursor: pointer;
        color: #fff;
        background-color: #0058DD;
    }
</style>