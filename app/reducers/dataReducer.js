import {
  DATA_AVAILABLE,
  SELECTED_IMAGE_INDEX,
  SELECTED_IMAGES
} from "../actions";

const INITIAL_STATE = {
  data: [],
  loading: true,
  selectedImageIndex: 0,
  selectedImagesArray: []
};

const DataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_AVAILABLE:
      return { ...state, data: action.data, loading: false };
    case SELECTED_IMAGE_INDEX:
      return { ...state, selectedImageIndex: action.data };
    case SELECTED_IMAGES:
      return { ...state, selectedImagesArray: action.data };
    default:
      return state;
  }
};

export default DataReducer;
