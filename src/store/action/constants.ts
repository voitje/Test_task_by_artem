export enum EReduxActionTypes {
    CREATE_PROJECT = 'CREATE_PROJECT',
    UPDATE_ARRAY = 'UPDATE_ARRAY',

}

const entity = 'PROJECT';

export const ProjectActionTypes = {
    CREATE_PROJECT: `${entity}.CREATE_PROJECT`,
    UPDATE_ARRAY: `${entity}.UPDATE_ARRAY`,
    SAVE_ARRAY: `${entity}.SAVE_ARRAY`,
};