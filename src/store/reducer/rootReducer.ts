import { combineReducers} from 'redux';
import {EReduxActionTypes} from "../action/constants";
import {projectReducer} from "./projectReducer";
import {arrayReducer} from "./arrayReducer";

const rootReducer = combineReducers({
    projects: projectReducer,
    array: arrayReducer,
});

export default rootReducer;
