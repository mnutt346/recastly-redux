import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch (action.type) {
  case 'CHANGE_VIDEO':
    return action.video || null;
  default: 
    return state;
  }

};
console.log(currentVideoReducer);
export default currentVideoReducer;
