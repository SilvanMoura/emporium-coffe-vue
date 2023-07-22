<template>
    <section class="contact" id="contact">

        <h1 class="heading"> <span>Entre em </span> Contato </h1>

        <div class="row">

            <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.212984431175!2d-52.34502968514691!3d-31.7646764203625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9511b599ab053ebd%3A0x64271580aafbcff8!2sR.%20Dr.%20Cassiano%2C%20409%20-%20Centro%2C%20Pelotas%20-%20RS%2C%2096015-700!5e0!3m2!1spt-BR!2sbr!4v1662081714200!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" ></iframe>
            
            <form action="">
                <h3>Entar em contato</h3>
                <div class="inputBox">
                    <span class="fas fa-user"></span>
                    <input type="text" placeholder="Nome">
                </div>
                <div class="inputBox">
                    <span class="fas fa-envelope"></span>
                    <input type="email" placeholder="Email">
                </div>
                <div class="inputBox">
                    <span class="fas fa-phone"></span>
                    <input type="number" placeholder="Telefone">
                </div>
                <input type="submit" value="Entar em contato" class="btn">
            </form>

        </div>

    </section>

</template>
  
<script>
  export default {
    name: 'Contact'
  }
</script>
  
<style scoped>
    .contact .row{
        display: flex;
        background:var(--black);
        flex-wrap: wrap;
        gap:1rem;
    }

    .contact .row .map{
        flex:1 1 45rem;
        width: 100%;
        object-fit: cover;
    }

    .contact .row form{
        flex:1 1 45rem;
        padding:5rem 2rem;
        text-align: center;
    }

    .contact .row form h3{
        text-transform: uppercase;
        font-size: 3.5rem;
        color:#fff;
    }

    .contact .row form .inputBox{
        display: flex;
        align-items: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
        background:var(--bg);
        border:var(--border);
    }

    .contact .row form .inputBox span{
        color:#fff;
        font-size: 2rem;
        padding-left: 2rem;
    }

    .contact .row form .inputBox input{
        width: 100%;
        padding:2rem;
        font-size: 1.7rem;
        color:#fff;
        text-transform: none;
        background:none;
    }
</style>
  