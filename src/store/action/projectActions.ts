import {EReduxActionTypes, ProjectActionTypes} from "./constants";
import {
    ArrayActionTypes,
    IArray,
    IProject,
    ProjectActionTypes as PAT,
    GradingTableActionTypes
} from "../project/types";

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
    };

    static saveGradingTable = (newArray: IArray) : GradingTableActionTypes => {
        return {
            type: ProjectActionTypes.SAVE_ARRAY,
            payload: newArray
        }
    }
}

export default ProjectActions;