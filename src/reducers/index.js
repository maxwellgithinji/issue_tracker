import {combineReducers} from 'redux';

import issuesParamsReducer from './issuesParamsReducer';
import searchIssuesReducer from './searchIssuesReducer';

export default combineReducers({
  issuesParams: issuesParamsReducer,
  searchParams: searchIssuesReducer,
});
