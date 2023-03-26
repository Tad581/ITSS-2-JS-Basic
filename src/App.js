import { useReducer, useRef, useEffect } from "react";
import { states } from "./reducer/states";
import reducer from "./reducer";
import { TodoWrapper } from "./components/TodoWrapper";

const initState = {
  job: "",
  jobs: [],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  const { job, jobs } = state;

  useEffect(() => {
    const jobs = JSON.parse(window.localStorage.getItem("jobs"));
    console.log("🚀 ~ file: App.js:17 ~ useEffect ~ jobs:", jobs)
  }, []);

  useEffect(() => {
    window.localStorage.setItem("jobs", JSON.stringify(state));
  }, [state]);

  const inputRef = useRef();
  const handleSubmit = () => {
    dispatch(states.addJob(job));
    dispatch(states.setJob(""));

    inputRef.current.focus();
  };

  return (
    <div className="App">
      {/* <div style={{ padding: "0 20px" }}>
        <h3> Todo </h3>
        <input
          ref={inputRef}
          value={job}
          placeholder="Enter todo..."
          onChange={(e) => {
            dispatch(states.setJob(e.target.value));
          }}
        />
        <button onClick={handleSubmit}> Add </button>
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              {job}
              <span onClick={() => dispatch(states.deleteJob(index))}>
                &times;
              </span>
            </li>
          ))}
        </ul>
      </div> */}
      <TodoWrapper />
    </div>
  );
}

export default App;
