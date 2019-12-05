import { EReduxActionTypes } from "../action/constants";

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

export type ProjectActionTypes = CreateProjectAction

export type IArray = Array<Array<String>>;

interface UpdateArrayAction {
    type: typeof EReduxActionTypes.UPDATE_ARRAY
    payload: IArray
}

export type ArrayActionTypes = UpdateArrayAction;

