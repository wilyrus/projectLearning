
export default  {
    template: '<button v-on:click.prevent="handleClick" class="dev-launche-button" v-bind:title="title">{{title}}</button>',

    props: ['title'],

    methods: {
        handleClick() {
            this.$emit('execute');
        }
    }
}
