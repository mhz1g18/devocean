import { ApiData } from "./../../util/types";
import { Action } from "../actions";
import { ActionType } from "../action-types";

interface AppState {
  items: ApiData[];
  loading: boolean;
  error: string | null;
  activeItem: null | ApiData;
}

const initialState: AppState = {
  items: [],
  loading: false,
  error: null,
  activeItem: null,
};

const appReducer = (state: AppState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.LOAD_ITEMS: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case ActionType.LOAD_ITEMS_SUCCESS: {
      return {
        ...state,
        error: null,
        loading: false,
        items: action.payload,
      };
    }
    case ActionType.LOAD_ITEMS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case ActionType.SET_ACTIVE_ITEM: {
      return {
        ...state,
        activeItem: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
