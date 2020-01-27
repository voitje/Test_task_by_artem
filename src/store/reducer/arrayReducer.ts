import {ArrayActionTypes, IArray, GradingTableActionTypes} from "../project/types";
import {EReduxActionTypes, ProjectActionTypes} from "../action/constants";

const initialState : IArray = [];

export const arrayReducer  = (
  state = initialState,
  action: GradingTableActionTypes
) => {
    switch (action.type) {
        case ProjectActionTypes.SAVE_ARRAY:
            return [...action.payload];
        default:
          return state;
    }
};