import './App.css'

const tech = "React";
const face = "😊";
const author = "C. Molinari";
const year = 2025;

const advantages = [
    "Components simplify the development process.",
    "Widely used technology, it's useful to learn it.",
    "Easy to learn and use."
];

function App() {
    return (
        <>
            <Header tech={tech} year="2025" author={author}/>
            <Main advantages={advantages}/>
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

function Main({advantages}) {
    return (
        <main>
            <h2>Advantages of using React:</h2>
            <ul>
                {advantages.map((advantage, index) => (
                    <li style={{listStyle: "none"}} key={index}>{advantage}</li>
                ))}
            </ul>
        </main>
    );
}

export default App
