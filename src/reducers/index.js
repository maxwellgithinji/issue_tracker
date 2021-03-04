import {combineReducers} from 'redux';

import issuesReducer from './issuesReducer';

export default combineReducers({
  issues: issuesReducer,
});

export const issues = issuesReducer;
