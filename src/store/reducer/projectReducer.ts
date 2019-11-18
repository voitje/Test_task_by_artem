import { EReduxActionTypes } from "../action/constants";
import {ProjectActionTypes, ProjectState} from "../project/types";

const initialState: ProjectState = {
    projects: []
};

export function projectReducer(
    state = initialState,
    action: ProjectActionTypes
): ProjectState {
    switch (action.type) {
        case EReduxActionTypes.CREATE_PROJECT:
            return {
                projects: [...state.projects, action.payload]
            }
        default:
            return state
    }
}