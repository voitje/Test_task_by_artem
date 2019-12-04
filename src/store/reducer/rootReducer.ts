import { combineReducers} from 'redux';
import {EReduxActionTypes} from "../action/constants";
import {projectReducer} from "./projectReducer";

const rootReducer = combineReducers({
    projects: projectReducer
});

export default rootReducer;
