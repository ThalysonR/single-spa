import React from 'react'
import { navigateToUrl } from 'single-spa'

const NavBar = () => (
    <nav style={styles.nav}>
        <a style={styles.item} href="/" onClick={navigateToUrl}>single-spa</a>
        <a style={styles.item} href="/" onClick={navigateToUrl}>React</a>
        {/* Note that we still need to build our AngularJS App before this link will work */}
        <a style={styles.item} href="/angular" onClick={navigateToUrl}>Angular</a>
        <a style={styles.item} href="/vue" onClick={navigateToUrl}>Vue</a>
        <a style={styles.item} href="/tudo" onClick={navigateToUrl}>Tudo</a>
    </nav>
);

const styles = {};

styles.nav = {
    display: 'flex',
    border: '5px dashed blue',
    marginBottom: 20,
};

styles.item = {
    margin: 10,
};

export default NavBar
