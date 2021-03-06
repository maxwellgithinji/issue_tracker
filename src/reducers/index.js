import {combineReducers} from 'redux';

import issuesParamsReducer from './issuesParamsReducer';

export default combineReducers({
  issuesParams: issuesParamsReducer,
});
