import './App.css'

let tech = "React";
let face = "😊";

function App() {
    return (
        <>
            <Header/>
            <main>
                <h2>First steps into React development</h2>
            </main>
        </>
    );
}

function Header() {
    return (
        <header>
            <h1>Hello {tech.toUpperCase()}!!! {face}</h1>
        </header>
    );
}

export default App
