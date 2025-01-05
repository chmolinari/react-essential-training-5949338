import './App.css'

let tech = "React";
let face = "😊";
let author = "C. Molinari";
let year = 2025;

function App() {
    return (
        <>
            <Header tech={tech} year="2025" author={author}/>
            <main>
                <h2>First steps into React development</h2>
            </main>
        </>
    );
}

function Header({tech, year, author}) {
    return (
        <header>
            <h1>Hello {tech.toUpperCase()}!!! {face}</h1>
            <p>Copyright &#169; {year} {author}</p>
        </header>
    );
}

export default App
