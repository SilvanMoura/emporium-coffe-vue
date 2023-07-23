import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}
