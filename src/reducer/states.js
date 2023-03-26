import { SET_JOB, ADD_JOB, DELETE_JOB, EDIT_JOB } from "./job_types";

export const states = {
    setJob: (payload) => {
      return {
        type: SET_JOB,
        payload,
      };
    },
    addJob: (payload) => {
      return {
        type: ADD_JOB,
        payload,
      };
    },
    deleteJob: (payload) => {
      return {
        type: DELETE_JOB,
        payload,
      };
    },
    editJob: (payload) => {
      return {
        type: EDIT_JOB,
        payload,
      };
    },
  };
