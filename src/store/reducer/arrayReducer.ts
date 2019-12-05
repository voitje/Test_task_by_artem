import {ArrayActionTypes, IArray} from "../project/types";
import {EReduxActionTypes} from "../action/constants";

const initialState : IArray = [[], []];

export const arrayReducer = (
    state: IArray = initialState,
    action: ArrayActionTypes
) => {
    switch (action.type) {
        case EReduxActionTypes.UPDATE_ARRAY:
            console.log('PYTHONGONVO', action.payload);
            return action.payload
        default:
            return state;
    }
}