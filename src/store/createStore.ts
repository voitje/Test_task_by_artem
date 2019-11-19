import { createStore } from 'redux';
import rootReducer from './reducer/rootReducer';
import {IProject} from "./project/types";

export interface IState {
    project: IProject
}

const store = createStore(
    rootReducer,undefined,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;