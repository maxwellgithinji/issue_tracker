import * as actionTypes from '../actions/types';

const initialState = {
  searchParams: {
    term: 'repo:facebook/react in:title in:body',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_AN_ISSUE:
      return {...state, searchParams: action.searchParams};
    default:
      return state;
  }
};

export default reducer;
