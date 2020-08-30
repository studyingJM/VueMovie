import Vue from 'vue/dist/vue';
import Main from '@/Main';
import axios from 'axios';
import swal from 'sweetalert2';
import router from '@/router/route.js';

import 'jquery/dist/jquery.min.js';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

window.axios = axios; //전역변수
window.swal = swal;

window.onload = () => {
    new Vue({
        el:'#app',
        router,
        render: h => h(Main)
    })
}