import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import NavBar from './root.component';

export const navBar = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: NavBar,
    domElementGetter,
});

function domElementGetter() {
    return document.getElementById("navBar")
}
