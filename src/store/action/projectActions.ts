import {EReduxActionTypes} from "./constants";
import {Project, ProjectActionTypes} from "../project/types";

export function createProject(newProject: Project) : ProjectActionTypes {
    return {
        type: EReduxActionTypes.CREATE_PROJECT,
        payload: newProject
    }
}