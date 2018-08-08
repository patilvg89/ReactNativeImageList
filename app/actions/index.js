import Data from "../../app/assets/data.json";

export const DATA_AVAILABLE = "DATA_AVAILABLE";

export function getData() {
  return dispatch => {
    dispatch({ type: DATA_AVAILABLE, data: Data.instructions });
  };
}
