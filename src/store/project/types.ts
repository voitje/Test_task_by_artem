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