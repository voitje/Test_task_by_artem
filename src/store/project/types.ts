import { EReduxActionTypes, ProjectActionTypes } from "../action/constants";

export interface IProject {
    name: string
    description: string
    link: string
}

export type IProjects = IProject[];

interface CreateProjectAction {
    type: typeof EReduxActionTypes.CREATE_PROJECT
    payload: IProject
}

interface SaveGradingTableAction {
    type: typeof ProjectActionTypes.SAVE_ARRAY,
    payload: IArray
}

interface UpdateArrayAction {
    type: typeof EReduxActionTypes.UPDATE_ARRAY
    payload: IArray
}

export type GradingTableActionTypes = SaveGradingTableAction;
export type ProjectActionTypes = CreateProjectAction
export type ArrayActionTypes = UpdateArrayAction;

export type IArray = Array<Array<Object>>;


