
import Vue from 'vue';
import app from './modules/app.vue';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})
