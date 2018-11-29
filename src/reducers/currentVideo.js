import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  let newState;

  switch (action.type) {
  case 'CHANGE_VIDEO':
    newState = action.video;
    return newState;
  default: return state;
  }

};
console.log(currentVideoReducer);
export default currentVideoReducer;
