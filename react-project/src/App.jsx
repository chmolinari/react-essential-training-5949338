import './App.css'

let tech = "React";
let face = "😊";

function App() {
    return (
        <>
            <Header tech={tech}/>
            <main>
                <h2>First steps into React development</h2>
            </main>
        </>
    );
}

function Header(props) {
    console.log(props)
    return (
        <header>
            <h1>Hello {props.tech.toUpperCase()}!!! {face}</h1>
        </header>
    );
}

export default App
