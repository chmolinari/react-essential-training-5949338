import './App.css';
import logo from './images/logo_light.svg'
import {useReducer} from "react";

const tech = "React";
const face = "😊";
const author = "C. Molinari";
const year = 2025;
const activelySearchingMessage = "Actively searching";
const notActivelySearchingMessage = "Not actively searching";
let isSearchingAJob = false;
const jobSearchState = {
    ACTIVELY_SEARCHING: "ACTIVELY_SEARCHING",
    NOT_ACTIVELY_SEARCHING: "NOT_ACTIVELY_SEARCHING"
};
const actionType = {
    TOGGLE_JOB_SEARCH_STATUS: "TOGGLE_JOB_SEARCH_STATUS"
}

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
    const [jobSearchStatus, dispatch] = useReducer(reducer, isSearchingAJob);

    function changeJobSearchStatus() {
        dispatch({type: actionType.TOGGLE_JOB_SEARCH_STATUS});
    }

    return (
        <>
            <Header tech={tech} year="2025" author={author}/>
            <Main advantages={advantages}/>
            <JobSearchStatus jobSearchStatus={jobSearchStatus} toggle={changeJobSearchStatus}/>
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

function JobSearchStatus({jobSearchStatus, toggle}) {
    return (
        <>
            <h2>Job Search Status</h2>
            <form>
                <label form="jobSearchStatus">My current job search status is:</label>
                <input type="text" name="jobSearchStatus" id="jobSearchStatus"
                       value={jobSearchStatus ? activelySearchingMessage : notActivelySearchingMessage} readOnly/>
                <button type="button"
                        onClick={() => toggle()}>
                    Change job search status
                </button>
            </form>
        </>
    )
}

function toggleJobSearchingState(currentState) {
    return !currentState;
}

function reducer(state, action) {
    switch (action.type) {
        case actionType.TOGGLE_JOB_SEARCH_STATUS:
            return toggleJobSearchingState(state);
        default:
            throw new Error();
    }
}

export default App
