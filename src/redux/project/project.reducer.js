import ProjectActionTypes from "./project.types";

const INITIAL_STATE = {
  //Set this to default the project that is displayed
  currentProjectName: "True Friends",
};

const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProjectActionTypes.SET_PROJECT:
      return {
        ...state,
        currentProjectName: action.payload,
      };
    default:
      return state;
  }
};

export default projectReducer;
