import {EReduxActionTypes} from "./constants";
import {IProject, ProjectActionTypes} from "../project/types";

export function createProject(newProject: IProject) : ProjectActionTypes {
    return {
        type: EReduxActionTypes.CREATE_PROJECT,
        payload: newProject
    }
}