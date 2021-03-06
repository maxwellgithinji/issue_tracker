import * as actionTypes from '../actions/types';

const initialState = {
  issuesParams: {
    name: 'react',
    login: 'facebook',
    states: ['OPEN', 'CLOSED'],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ISSUES_PARAMS:
      return {...state, issuesParams: action.issuesParams};
    default:
      return state;
  }
};

export default reducer;
