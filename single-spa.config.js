import {registerApplication, start} from 'single-spa';

registerApplication(
    'home',
    // loading function
    () => import('./src/home/home.app.js'),
    // activity function
    () => location.pathname === "" || location.pathname === "/" || location.pathname.startsWith('/home') || location.pathname === '/tudo'
);

registerApplication(
    'navBar',
    () => import ('./src/navBar/navVanilla.app.js'),
    () => true
);

registerApplication(
    'angular',
    () => import('./src/angular/angular.app.js'),
    pathPrefix('/angular')
);

registerApplication(
    'vue',
    () => import('./src/vue/vue.app.js'),
    pathPrefix('/vue')
);

function pathPrefix(prefix) {
    return function(location) {
        return location.pathname.startsWith(`${prefix}`) || location.pathname === '/tudo';
    }
}

start();
