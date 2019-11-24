import htm from 'https://unpkg.com/htm?module';
import { h, render, Component } from 'https://unpkg.com/preact?module';
import Router from 'https://unpkg.com/preact-router?module';

const html = htm.bind(h);
const { createHashHistory } = History;

const index = new FlexSearch();
let metadata;

const fetchIndex = async () => {
    const url = '/searchIndex.json';
    const data = await (await fetch(url)).text();
    return data;
}
const fetchMetadata = async () => {
    const url = '/metadata.json';
    const data = await (await fetch(url)).json();
    return data;
}

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
        let html = this.state.html;
        if (this.props.query) {
            const keyword = query;
            const content = html;

            const sanitizedKeyword = keyword.replace(/\W/g, '');

            const regexForContent = new RegExp(sanitizedKeyword, 'gi');

            content = content.replace(regexForContent, '<mark>$&</mark>');
        }
        const internalProps = {
            dangerouslySetInnerHTML: { __html: html }
        };

        return html`<article id="main" ...${internalProps} /> `;
    }
}

class SearchResults extends Component {
    constructor() {
        super();
        this.state = { results: [] };
    }

    async componentDidMount() {
        const results = await index.search({ query: this.props.query, suggest: true });
        this.setState({ results });
    }

    async componentDidUpdate(nextProps) {
        if (nextProps.query != this.props.query) {
            const results = await index.search({ query: this.props.query, suggest: true });
            this.setState({ results });
        }
    }

    render() {
        const list = this.state.results.map(result => {
            const note = metadata.notes.find(x => x.name == result)
            return html`
            <div lass="searchResult">
                <a href="/note/${result}/${this.props.query}">${note.header}</a>
            </div>`;
        });
        return html`
        <article id="main">
        <h1>Search results for "${this.props.query}"</h1>
            ${list}
        </article>`
    }
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
    html`<article id="main" >
                <h1>Welcome</h1>
                <p>These are my notes</p>
                <p>Source and build steps can be found at <a href="https://github.com/Dgaduin/note-scripts">GitHub</a></p>
                <p>
                    <a href="https://app.netlify.com/sites/notes-dgaduin/deploys" rel="nofollow">
                        <img src="https://camo.githubusercontent.com/a060d3a8d7d75179c23fb1d0da8958a4221046f7/68747470733a2f2f6170692e6e65746c6966792e636f6d2f6170692f76312f6261646765732f36663839636564302d633335352d343539342d623338622d3233363135653737313665322f6465706c6f792d737461747573" alt="Netlify Status" data-canonical-src="https://api.netlify.com/api/v1/badges/6f89ced0-c355-4594-b38b-23615e7716e2/deploy-status" style="max-width:100%;"></img>
                    </a>
                </p>
        </article > `;


const App = (metadata) => {
    const routerProps = { history: createHashHistory() };

    return html`
        <div id="root" >
        <${Router} ...${routerProps} >
            <${Home} ...${{ default: true, path: "/" }} /> 
            <${Note} ...${{ path: "/note/:id/:query?" }} />
            <${SearchResults} ...${{ path: "/search/:query" }} />              
        <//>     
    <${Sidebar} ...${metadata} />
    </div >
    `;
};

fetchIndex()
    .then(searchIndex => {
        index.import(searchIndex);
    })

fetchMetadata()
    .then((data) => {
        metadata = data;
        render(
            html`<${App} ...${{ metadata: data }} />`,
            document.body)
    });
