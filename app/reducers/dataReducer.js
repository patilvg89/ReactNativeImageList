import { DATA_AVAILABLE } from "../actions";

const INITIAL_STATE = { data: null, loading: true };

const DataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_AVAILABLE:
      return { ...state, data: action.data, loading: false };
    default:
      return state;
  }
};

export default DataReducer;
