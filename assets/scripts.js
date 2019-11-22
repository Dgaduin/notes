import htm from 'https://unpkg.com/htm?module';
import { h, render, Component } from 'https://unpkg.com/preact?module';
import Router from 'https://unpkg.com/preact-router?module';

const { createHashHistory } = History;
const html = htm.bind(h);

var process = { env: { NODE_ENV: "production" } };

const fetchMetadata = async () => {
    const url = '/metadata.json';
    const data = await (await fetch(url)).json();
    return data;
}

const renderSidebar = ({ metadata }) =>
    metadata.notes.map(note => {
        const { name, header } = note;
        return html`
        <li>
            <a href="/note/${name}">${header}</a>
        </li>`;
    });

const Home = () => html`<article id="main"><h1>This is a test</h1></article>`

class Note extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.id != this.props.id;
    }

    async setHtml(id) {
        const html = await fetch(`/${id}.html`).then(res => res.text());
        this.setState({ html });
    }

    async componentDidMount() {
        this.setHtml(this.props.id);
    }

    async componentDidUpdate() {
        this.setHtml(this.props.id);
    }

    render() {
        const internalProps = {
            dangerouslySetInnerHTML: { __html: this.state.html }
        };

        return html`<article id="main" ...${internalProps}></article>`;
    }
}

const App = (metadata) => {
    const notes = renderSidebar(metadata);
    const asyncProps = {
        path: "/note/:id",
    };
    const routerProps = { history: createHashHistory() };
    return html`
    <div id="root">            
        <${Router} ...${routerProps}>
            <${Home} ...${{ default: true, path: "/" }}/> 
            <${Note} ...${asyncProps}/>              
        <//>     
        <nav id="sidebar">
            <header>
                <h2><a href="/">Notes</a></h2>
            </header>
            <ul>
                ${notes}
            </ul>
        </nav>   
    </div>
    `;
};


fetchMetadata()
    .then((x) => {
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
