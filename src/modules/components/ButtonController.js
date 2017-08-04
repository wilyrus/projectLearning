
import Vue from 'vue';

export default Vue.component('my-component', {
    template: '<button v-on:click="handleClick" class="dev-launche-button">Пользовательский компонент!</button>',

    methods: {
        handleClick() {
            this.$emit('handleClick')
        }
    }
})
