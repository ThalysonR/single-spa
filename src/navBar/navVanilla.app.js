import '@babel/polyfill';

let inner, container;


export async function bootstrap() {
    container = document.getElementById('navBar');

    inner = document.createElement('div');

    container.style.width = '100%';

    inner.innerHTML = `<fieldset style="margin-bottom: 20px;">
<legend>Vanilla</legend>
<nav>
        <a href="#" onclick="window.history.pushState(null, 'React', '/');">single-spa</a>
        <a href="#" onclick="window.history.pushState(null, 'React', '/');">React</a>
        <a href="#" onclick="window.history.pushState(null, 'Angular', '/angular');">Angular</a>
        <a href="#" onclick="window.history.pushState(null, 'Vue', '/vue');">Vue</a>
        <a href="#" onclick="window.history.pushState(null, 'Tudo', '/tudo');">Tudo</a>
    </nav>
</fieldset>`;

    inner.style.display = 'none';

    container.appendChild(inner);
}

export async function mount() {
    inner.style.display = 'block';
    if(container.styles)
    container.styles.display = 'flex';
}

export async function unmount() {
    container.style.display = 'none';
}
