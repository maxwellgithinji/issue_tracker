import * as actionTypes from './types';

import {getDummyIssues} from './dummyData';
import {
  actionIsLoading,
  actionHasLoaded,
  actionHasErrors,
} from './actionHelpers';

// // Issues Get
export const getIssues = () => async (dispatch) => {
  const {GET_ISSUES_LOADING, GET_ISSUES, GET_ISSUES_ERROR} = actionTypes;
  try {
    const issuesPromise = 'promise goes here';
    dispatch(actionIsLoading(GET_ISSUES_LOADING, true));
    const issues = getDummyIssues();
    dispatch(actionHasLoaded(GET_ISSUES, issues.data));
  } catch (error) {
    console.log(error);
    dispatch(actionHasErrors(GET_ISSUES_ERROR, error));
  }
};
