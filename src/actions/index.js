import * as actionTypes from './types';

// Get Issues Params
export const getIssuesParams = (params) => (dispatch) => {
  const {GET_ISSUES_PARAMS} = actionTypes;
  dispatch({
    type: GET_ISSUES_PARAMS,
    issuesParams: params,
  });
};
