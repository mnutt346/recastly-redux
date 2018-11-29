import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';

// import thunk from 'redux-thunk';
// import { applyMiddleware } from 'redux';



//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.
// const enhancer = applyMiddleware(thunk);

const mapStateToProps = (state) => {

  console.log('WHAT IS THIS STATE????' + state);
  
  return {
    // active: ownProps.filter === state.visibilityFilter
    value: state.value
  };
};

const mapDispatchToProps = (dispatch, q) => {
  return {
    onClick: () => {
      dispatch(handleSearchChange(q));
    }
  };

};


const Connect = connect(mapStateToProps, mapDispatchToProps)(Search);

var SearchContainer = Connect || null;




export default SearchContainer;
