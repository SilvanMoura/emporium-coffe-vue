<template>
    <section class="about" id="about">

        <h1 class="heading"> <span>Sobre</span> Nós </h1>

        <div class="row">

            <div class="image">
                <img src="images/about-img.jpeg" alt="">
            </div>

            <div class="content">
                <h3>O que torna nosso café especial?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae ratione a officiis id temporibus autem? Quod nemo facilis cupiditate. Ex, vel?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit amet enim quod veritatis, nihil voluptas culpa! Neque consectetur obcaecati sapiente?</p>
                <a href="#" class="btn">learn more</a>
            </div>

        </div>

    </section>
</template>
  
<script>
  export default {
    name: 'About'
  }
</script>
  
<style scoped>
    .about .row{
        display: flex;
        align-items: center;
        background:var(--black);
        flex-wrap: wrap;
    }

    .about .row .image{
        flex:1 1 45rem;
    }

    .about .row .image img{
        width: 100%;
    }
    .about .row .content{
        flex:1 1 45rem;
        padding:2rem;
    }

    .about .row .content h3{
        font-size: 3rem;
        color:#fff;
    }

    .about .row .content p{
        font-size: 1.6rem;
        color:#ccc;
        padding:1rem 0;
        line-height: 1.8;
    }
</style>
  