import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Home from './root.component';

const reactLifecyles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Home,
    domElementGetter,
});

export const bootstrap =[
    reactLifecyles.bootstrap,
];

export const mount = [
    reactLifecyles.mount,
];

export const unmount = [
    reactLifecyles.unmount,
];

function domElementGetter() {
    return document.getElementById('home');
}
