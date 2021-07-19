import { ApiData } from "./../../util/types";
import { ActionType } from "./../action-types/index";

interface LoadItems {
  type: ActionType.LOAD_ITEMS;
}

interface LoadItemsSuccess {
  type: ActionType.LOAD_ITEMS_SUCCESS;
  payload: ApiData[];
}

interface LoadItemsError {
  type: ActionType.LOAD_ITEMS_ERROR;
  payload: string;
}

interface SetActiveItem {
  type: ActionType.SET_ACTIVE_ITEM;
  payload: ApiData;
}

export type Action =
  | LoadItems
  | LoadItemsSuccess
  | LoadItemsError
  | SetActiveItem;
