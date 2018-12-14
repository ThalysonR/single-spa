import Vue from 'vue/dist/vue.min';
import singleSpaVue from 'single-spa-vue';

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        el: '#vue',
        template: `<div id="vue">
    <div style="border: 5px dashed green; display: flex; flex-flow: column wrap; align-items: center; box-sizing: border-box; padding: 50px;">
                        <h1>Vue</h1>
                        <img src="https://vuejsexamples.com/content/images/2017/10/vuejsexamples.png" height="100" width="100"/>
                    </div>
</div>`
    }
});

export const bootstrap = [
    vueLifecycles.bootstrap,
];

export const mount = [
    vueLifecycles.mount,
];

export const unmount = [
    vueLifecycles.unmount,
];
