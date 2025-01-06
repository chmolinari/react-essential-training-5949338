import './App.css';
import logo from './images/logo_light.svg'
import {useState} from "react";

const tech = "React";
const face = "😊";
const author = "C. Molinari";
const year = 2025;
const activelySearchingMessage = "Actively searching";
const notActivelySearchingMessage = "Not actively searching";
let isSearchingAJob = false;

const advantages = [
    {
        id: 1,
        text: "Components simplify the development process."
    },
    {
        id: 2,
        text: "Widely used technology, it's useful to learn it."
    },
    {
        id: 3,
        text: "Easy to learn and use."
    }
];

function App() {
    const [state, newState] = useState(isSearchingAJob);
    return (
        <>
            <Header tech={tech} year="2025" author={author}/>
            <Main advantages={advantages}/>
            <JobSearchStatus jobSearchState={state} newState={newState}/>
        </>
    );
}

function Header({tech, year, author}) {
    return (
        <header>
            <Logo alt="React-Logo"/>
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
                {advantages.map((advantage) => (
                    <li style={{listStyle: "none"}} key={advantage.id}>{advantage.text}</li>
                ))}
            </ul>
        </main>
    );
}

function Logo() {
    return <img width="170px" src={logo} alt="React logo"/>
}

function JobSearchStatus({jobSearchState, newState}) {
    return (
        <>
            <h2>Job Search Status</h2>
            <form>
                <label form="jobSearchStatus">My current job search status is:</label>
                <input type="text" name="jobSearchStatus" id="jobSearchStatus"
                       value={jobSearchState ? activelySearchingMessage : notActivelySearchingMessage} readOnly/>
                <button type="button"
                        onClick={() => newState(toggleJobSearchingState(jobSearchState))}>
                    Change job search status
                </button>
            </form>
        </>
    )
}

function toggleJobSearchingState(currentState) {
    return !currentState;
}

export default App
