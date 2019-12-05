import {EReduxActionTypes} from "./constants";
import {ArrayActionTypes, IArray, IProject, ProjectActionTypes} from "../project/types";

export function createProject(newProject: IProject) : ProjectActionTypes {
    return {
        type: EReduxActionTypes.CREATE_PROJECT,
        payload: newProject
    }
}

export const updateArray = (newArray: IArray) : ArrayActionTypes => {
    return {
        type: EReduxActionTypes.UPDATE_ARRAY,
        payload: newArray
    }
};