import * as actionTypes from './types';

// Get Issues Params
export const getIssuesParams = (params) => (dispatch) => {
  const {GET_ISSUES_PARAMS} = actionTypes;
  dispatch({
    type: GET_ISSUES_PARAMS,
    issuesParams: params,
  });
};

export const searchIssues = (term) => (dispatch) => {
  const {SEARCH_AN_ISSUE} = actionTypes;
  dispatch({
    type: SEARCH_AN_ISSUE,
    searchParams: term,
  });
};
