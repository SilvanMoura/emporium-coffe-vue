<template>
    <section class="footer">

        <div class="share">
            <a href="#">
                <svg-icon type="mdi" :path="path" style="width: 30px; height: 30px;"></svg-icon>
            </a>
        </div>

        <div class="links">
            <a href="#">home</a>
            <a href="#">Sobre Nós</a>
            <a href="#">Opiniões</a>
            <a href="#">Entre em contato</a>
        </div>

        <div class="credit">Criado por <span>Silvan Moura</span> | Todos os direitos reservados</div>

    </section>

</template>
  
<script>
    import SvgIcon from '@jamescoyle/vue-icon';
    import { mdiInstagram } from '@mdi/js';
    export default {
        name: 'Footer',
        components: {
            SvgIcon
        },

        data() {
            return {
                path: mdiInstagram,
            }
        }
    }
</script>
  
<style scoped>
    .footer{
        background: url(../../public/images/footer-bg.jpg) no-repeat;
        background-size: cover;
        text-align: center;
    }

    .footer .share{
        padding: 1rem 0;
    }

    .footer .share a{
        height: 5rem;
        width: 5rem;
        line-height: 5rem;
        font-size: 4rem;
        color:#fff;
        padding: 0 10px;
        border:var(--border);
        margin:.3rem;
        border-radius: 50%;
    }

    .footer .share a:hover{
        background-color: var(--main-color);
    }

    .footer .links{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding:2rem 0;
        gap:1rem;
    }

    .footer .links a{
        padding:.7rem 2rem;
        color:#fff;
        border:var(--border);
        font-size: 2rem;
    }

    .footer .links a:hover{
        background:var(--main-color);
    }

    .footer .credit{
        font-size: 2rem;
        color:#fff;
        font-weight: lighter;
        padding:1.5rem;
    }

    .footer .credit span{
        color:var(--main-color);
    }
</style>
  