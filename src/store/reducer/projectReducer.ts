import { EReduxActionTypes } from "../action/constants";
import {ProjectActionTypes, IProject, IProjects} from "../project/types";

const initialState: IProjects = [];

export function projectReducer(
    state = initialState,
    action: ProjectActionTypes
): IProjects {
    switch (action.type) {
        case EReduxActionTypes.CREATE_PROJECT:
            return [
               ...state, action.payload,
            ];
        default:
            return state;
    }
}
