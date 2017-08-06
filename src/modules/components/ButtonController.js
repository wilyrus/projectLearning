
import Vue from 'vue';

export default Vue.component('my-button', {
    template: '<button v-on:click="handleClick" class="dev-launche-button" v-bind:title="title">{{title}}</button>',

    props: ['title'],

    methods: {
        handleClick() {
            this.$emit('handleClick');
        }
    }
})
