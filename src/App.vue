<template>
    <Header />
    <Home />
    <About />
    <Review />
    <Contact />
    <Footer />
</template>

<script>
    import Header from './components/Header.vue'
    import Home from './components/Home.vue'
    import About from './components/About.vue'
    import Review from './components/Review.vue'
    import Contact from './components/Contact.vue'
    import Footer from './components/Footer.vue'

export default {
    name: 'App',
    components: {
        Header,
        Home, 
        About,
        Review,
        Contact,
        Footer
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');

    :root{
        --main-color:#d3ad7f;
        --black:#13131a;
        --bg:#010103;
        --border:.1rem solid rgba(255,255,255,.3);
    }

    *{
        font-family: 'Roboto', sans-serif;
        margin:0; padding:0;
        box-sizing: border-box;
        outline: none; border:none;
        text-decoration: none;
        text-transform: capitalize;
        transition: .2s linear;
    }

    html{
        font-size: 62.5%;
        overflow-x: hidden;
        scroll-padding-top: 9rem;
        scroll-behavior: smooth;
    }

    html::-webkit-scrollbar{
        width: .8rem;
    }

    html::-webkit-scrollbar-track{
        background: transparent;
    }

    html::-webkit-scrollbar-thumb{
        background: #fff;
        border-radius: 5rem;
    }

    body{
        background: var(--bg);
    }

    section{
        padding:2rem 7%;
    }




    .heading{
    text-align: center;
    color:#fff;
    text-transform: uppercase;
    padding-bottom: 3.5rem;
    font-size: 4rem;
    }

    .heading span{
        color:var(--main-color);
        text-transform: uppercase;
    }

    .btn{
        margin-top: 1rem;
        display: inline-block;
        padding:.9rem 3rem;
        font-size: 1.7rem;
        color:#fff;
        background: var(--main-color);
        cursor: pointer;
    }

    .btn:hover{
        letter-spacing: .2rem;
    }


    /* media queries  */
    @media (max-width:991px){

    html{
        font-size: 55%;
    }

    .header{
        padding:1.5rem 2rem;
    }

    section{
        padding:2rem;
    }

    }

    @media (max-width:768px){

    .header .navbar{
        position: absolute;
        top:100%; right: -100%;
        background: #fff;
        width: 100%;
        height: calc(100vh - 9.5rem);
    }

    .header .navbar.active{
        right:0;
    }

    .header .navbar a{
        color:var(--black);
        display: block;
        margin:1.5rem;
        padding:.5rem;
        font-size: 2rem;
    }

    .header .search-form{
        width: 90%;
        right: 2rem;
    }

    .home{
        background-position: left;
        justify-content: center;
        text-align: center;
    }

    .home .content h3{
        font-size: 4.5rem;
    }

    .home .content p{
        font-size: 1.5rem;
    }

    }

    @media (max-width:450px){

    html{
        font-size: 50%;
    }

    }

</style>
