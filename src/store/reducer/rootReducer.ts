import { combineReducers} from 'redux';
import {EReduxActionTypes} from "../action/constants";
import {projectReducer} from "./projectReducer";

const rootReducer = combineReducers({
    project: projectReducer
});

export default rootReducer;
