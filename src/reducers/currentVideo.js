import Redux from 'redux';

var currentVideoReducer = (state = [], action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  let newState;

  switch (action.type) {
    case 'CHANGE_VIDEO':
      newState = [...state, {}]
  }
};

export default currentVideoReducer;
