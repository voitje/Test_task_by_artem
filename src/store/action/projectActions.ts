import {EReduxActionTypes} from "./constants";
import {ArrayActionTypes, IArray, IProject, ProjectActionTypes as PAT} from "../project/types";

const entity = 'PROJECT';

export const ProjectActionTypes = {
    CREATE_PROJECT: `${entity}.CREATE_PROJECT`,
    UPDATE_ARRAY: `${entity}.UPDATE_ARRAY`,
};

class ProjectActions {
    static createProject(newProject: IProject) : PAT {
        return {
            type: EReduxActionTypes.CREATE_PROJECT,
            payload: newProject
        }
    }

    static updateArray = (newArray: IArray) : ArrayActionTypes => {
        return {
            type: EReduxActionTypes.UPDATE_ARRAY,
            payload: newArray
        }
    }
}

export default ProjectActions;