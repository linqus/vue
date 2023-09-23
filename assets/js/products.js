import { compile, createApp } from 'vue';

const template = '<h1>Hello {{ firstName }}! </h1>';

createApp({
    data() {
        return {
            firstName: 'Karol',
        };
    },
    render() {
        return compile(template)(this.$.ctx);
    },
}).mount('#app');
