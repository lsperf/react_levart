const initState = {
  projects: [
    {id: '1', title: 'find me idea', content: 'I need working idea'},
    {id: '2', title: 'be persistent', content: 'It will bring you somewhere'},
    {id: '3', title: 'Go oposite', content: 'Go in oposite direction of trend'}
  ]
}

const projectReducer = (state = initState, action) =>{
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.project);
      return state;
    default:
      return state;
  }
}

export default projectReducer