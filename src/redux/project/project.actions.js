import ProjectActionTypes from "./project.types";

export const setProjectName = (project) => ({
  type: ProjectActionTypes.SET_PROJECT,
  payload: project,
});
