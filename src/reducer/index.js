import { SET_JOB, ADD_JOB, DELETE_JOB, EDIT_JOB } from "./job_types";

export default function reducer(state, action) {
  let newState;
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      newState = {
        ...state,
        jobs: [...newJobs],
      };
      break;
    case EDIT_JOB:
      break;
    default:
      throw new Error("Invalid action");
  }
  return newState;
}
