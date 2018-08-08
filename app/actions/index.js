import data from "../../app/assets/data.json";

export const DATA_AVAILABLE = "DATA_AVAILABLE";
export const SELECTED_IMAGE_INDEX = "SELECTED_IMAGE_INDEX";

export function getData() {
  return dispatch => {
    dispatch({ type: DATA_AVAILABLE, data: data });
  };
}

export function imageIndex(index) {
  return dispatch => {
    dispatch({ type: SELECTED_IMAGE_INDEX, data: index });
  };
}
