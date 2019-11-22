import { html, render, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';
import Router from 'https://unpkg.com/preact-router?module';
import AsyncRoute from 'https://unpkg.com/preact-async-route?module'

const fetchMetadata = async () => {
    const url = '/metadata.json';
    const data = await (await fetch(url)).json();
    console.log(data);
    return data;
}

const renderSidebar = ({ metadata }) =>
    metadata.notes.map(note => {
        const { name, header } = note;
        return html`
        <li>
            <a href="${name}">${header}</a>
        </li>`;
    });

const Home = () => html`<article id="main"><h1>This is a test</h1></article>`

class Note extends Component {
    constructor(props) {
        super();
        console.log(this.props, props, this.state)
        this.state = { html: "" };
    }

    async componentDidMount(props) {
        console.log(this.props, props, this.state)
        const html = fetch(`/${props.id}`.html)
            .then(res => res.text())
        this.setState({ html });
    }
    render() {
        const internalProps = {
            dangerouslySetInnerHTML: this.state.html
        };
        return html`<article id="main" ...${internalProps}></article>`;
    }
}

const App = (metadata) => {
    console.log(metadata);
    const notes = renderSidebar(metadata);
    const asyncProps = {
        path: "/note/:val"
    };
    const homeProps = {
    }
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
        <${Router}>
                <${Note} ...${asyncProps}/>                    
                <${Home} ...${homeProps} default/> 
        </${Router}>
        
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
