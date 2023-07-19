<template>
    <header class="header">

        <a href="#" class="logo">
            <img src="images/coffe.jpeg" alt="logo da cafeteria">
        </a>

        <nav class="navbar">
            <a href="#home">Home</a>
            <a href="#about">Sobre Nós</a>
            <a href="#review">Opniões</a>
            <a href="#contact">Entre em Contato</a>
        </nav>

        <div class="icons">
            <div class="fas fa-bars" id="menu-btn"></div>
        </div>


    </header>
</template>
  
<script>
  export default {
    name: 'Header'
  }
</script>
  
<style scoped>
    .header{
        background: var(--bg);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:1.5rem 7%;
        border-bottom: var(--border);
        position: fixed;
        top:0; left: 0; right: 0;
        z-index: 1000;
    }

    .header .logo img{
        height: 6rem;
    }

    .header .navbar a{
        margin:0 1rem;
        font-size: 1.6rem;
        color:#fff;
    }

    .header .navbar a:hover{
        color:var(--main-color);
        border-bottom: .1rem solid var(--main-color);
        padding-bottom: .5rem;
    }

    .header .icons{
        display: none;
    }

    .header .icons div{
        color:#fff;
        cursor: pointer;
        font-size: 2.5rem;
        margin-left: 2rem;
    }

    .header .icons div:hover{
        color:var(--main-color);
    }
    #menu-btn{
        display: none;
    }
</style>
  