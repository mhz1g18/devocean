import { ApiData /* ApiResponse */ } from "./../../util/types";
import { endpoint } from "./../../util/api";
import { ActionType } from "./../action-types/index";
import { Dispatch } from "redux";
import { Action } from "./../actions";
import axios from "axios";

export const loadItems = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOAD_ITEMS,
    });

    try {
      const response = await axios.request<ApiData[]>({
        url: endpoint,
        /*       transformResponse: (r: ApiResponse) => r.data, */
      });
      const { data } = response;

      dispatch({
        type: ActionType.LOAD_ITEMS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ActionType.LOAD_ITEMS_ERROR,
        payload: error,
      });
    }
  };
};

export const setActiveItem = (item: ApiData) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_ACTIVE_ITEM,
      payload: item,
    });
  };
};
