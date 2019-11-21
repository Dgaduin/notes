import { html, render } from 'https://unpkg.com/htm/preact/standalone.module.js';

const fetchMetadata = async () => {
    const url = '/metadata.json';
    const data = await (await fetch(url)).json();
    console.log(data);
    return data;
}

const renderSidebar = ({ metadata }) =>
    metadata.notes.map(note => {
        const { link, header } = note;
        return html`
        <li>
            <a href="${link}">${header}</a>
        </li>`;
    });


const App = (metadata) => {
    console.log(metadata);
    const notes = renderSidebar(metadata);
    return html`
    <div id="root">
        <nav id="sidebar">
            <header>
                <h2>Notes</h2>
            </header>
            <ul>
                ${notes}
            </ul>
        </nav>
        <article id="main">
        </article>
    </div>
    `;
};


fetchMetadata()
    .then((x) => {
        console.log(x);
        render(
            html`<${App} ...${{ metadata: x }} />`,
            document.body)
    });

// const renderHtml = async (route) => {
//     console.log(route);
//     const text = await (await fetch(route)).text();
//     return html(text);
// };

// render(
//     html`
//     <${await renderHtml(location.pathname)} />    
//     `,
//     document.getElementById('main')
// );


// const Route = {
//     //'/': React.lazy(() => import('./routes/home/index.js')),
//     '/': () => html`<h2>Home </h2>`,
//     '*': () => html`<h2>Not Found</h2>`
// }

// ReactDOM.render(
//     html`
//     <${React.Suspense} fallback=${html`<div></div>`}>
//     <${Route[location.pathname] || Route['*']} />
//     <//>
//     `,
//     document.getElementById('test')
// );
