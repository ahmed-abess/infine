import { combineReducers } from 'redux';
import projectReducer from "./project/reducers";
const rootReducers = combineReducers({
    projectReducer
});

export default rootReducers;