export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make asynk call to db
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'L',
      authorLastName: 'S',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project });
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err });
    })
    
  }
};