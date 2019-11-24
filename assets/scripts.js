import htm from 'https://unpkg.com/htm?module';
import { h, render, Component } from 'https://unpkg.com/preact?module';
import Router from 'https://unpkg.com/preact-router?module';

const { createHashHistory } = History;
const html = htm.bind(h);

const fetchMetadata = async () => {
    const url = '/metadata.json';
    const data = await (await fetch(url)).json();
    return data;
}

const NotesCollection = ({ metadata }) =>
    metadata.notes.map(note => {
        const { name, header } = note;
        return html`
        <li>
            <a href="/note/${name}">${header}</a>
        </li>`;
    });

const Sidebar = ({ metadata }) => {
    return html`
        <nav id="sidebar">
            <header>
                <h2>
                    <a href="/">
                        Notes
                    </a>
                </h2>
            </header>
            <ul>
                <${NotesCollection} ...${{ metadata }}/>
            </ul>
        </nav> `;
}

const Home = () =>
    html`
        <article id="main">
            <h1>Welcome</h1>
            <p>These are my notes</p>
            <p>Source and build steps can be found at <a href="https://github.com/Dgaduin/note-scripts">GitHub</a></P>
            [![Netlify Status](https://api.netlify.com/api/v1/badges/6f89ced0-c355-4594-b38b-23615e7716e2/deploy-status)](https://app.netlify.com/sites/notes-dgaduin/deploys)
        </article>`;

class Note extends Component {
    async setHtml(id) {
        const html = await fetch(`/${id}.html`).then(res => res.text());
        this.setState({ html });
    }

    async componentDidMount() {
        this.setHtml(this.props.id);
    }

    async componentDidUpdate(nextProps) {
        if (nextProps.id != this.props.id)
            this.setHtml(this.props.id);
    }

    render() {
        const internalProps = {
            dangerouslySetInnerHTML: { __html: this.state.html }
        };

        return html`<article id="main" ...${internalProps} />`;
    }
}

const App = (metadata) => {
    const routerProps = { history: createHashHistory() };

    return html`
    <div id="root">            
        <${Router} ...${routerProps}>
            <${Home} ...${{ default: true, path: "/" }} /> 
            <${Note} ...${{ path: "/note/:id" }} />              
        <//>     
        <${Sidebar} ...${metadata}/>
    </div>
    `;
};


fetchMetadata()
    .then((metadata) => {
        render(
            html`<${App} ...${{ metadata }} />`,
            document.body)
    });
