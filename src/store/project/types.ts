import {EReduxActionTypes} from "../action/constants";

export interface Project {
    name: string
    description: string
    link: string
}

export interface ProjectState {
    projects: Project[]
}

interface CreateProjectAction {
    type: typeof EReduxActionTypes.CREATE_PROJECT
    payload: Project
}

export type ProjectActionTypes = CreateProjectAction