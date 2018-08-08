import { DATA_AVAILABLE, SELECTED_IMAGE_INDEX } from "../actions";

const INITIAL_STATE = { data: [], loading: true, selectedImageIndex: 0 };

const DataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_AVAILABLE:
      return { ...state, data: action.data, loading: false };
    case SELECTED_IMAGE_INDEX:
      return { ...state, selectedImageIndex: action.data };
    default:
      return state;
  }
};

export default DataReducer;
