import * as actionTypes from '../actions/types';

const initialState = {
  issues: [],
  loading: true,
  errorMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ISSUES_LOADING:
      return {...state, loading: action.payload};
    case actionTypes.GET_ISSUES:
      return {...state, issues: action.payload, loading: action.loading};
    case actionTypes.GET_ISSUES_ERROR:
      return {...state, errorMessage: action.payload, loading: action.loading};
    default:
      return state;
  }
};
