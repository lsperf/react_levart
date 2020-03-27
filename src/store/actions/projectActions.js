export const createProject = (project) => {
  return (dispatch, getState) => {
    // make asynk call to db
    dispatch({ type: 'CREATE_PROJECT', project });
  }
};