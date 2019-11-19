import { EReduxActionTypes } from "../action/constants";
import {ProjectActionTypes, IProject} from "../project/types";

const initialState: IProject = {

        name: '',
        description: '',
        link: ''


};

export function projectReducer(
    state = initialState,
    action: ProjectActionTypes
): IProject {
    switch (action.type) {
        case EReduxActionTypes.CREATE_PROJECT:
            return {
               ...state, ...action.payload
            }
        default:
            return state
    }
}