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
            <svg-icon type="mdi" :path="path" id="menu-btn"></svg-icon>
        </div>

    </header>
</template>
  
<script>
    import SvgIcon from '@jamescoyle/vue-icon';
    import { mdiMenu } from '@mdi/js';
    export default {
        name: 'Header',
        components: {
            SvgIcon
        },
        data() {
            return {
                path: mdiMenu,
            }
        }
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

    .header .icons svg-icon {
        color:#fff;
        cursor: pointer;
        font-size: 2.5rem;
        margin-left: 2rem;

    }

    .header .icons svg-icon:hover{
        color:var(--main-color);
    }
    #menu-btn{
        display: none;
    }

    @media (max-width:768px){

        .header .icons{
            display: inline-block;
        }

        #menu-btn{
            display: inline-block;
            color: #d3ad7f;
        }
        .header .navbar a{
            margin:0 1rem;
            font-size: 1.6rem;
            color:#000;
        }
    }
</style>
  