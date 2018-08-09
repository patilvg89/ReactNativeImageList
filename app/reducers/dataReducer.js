import {
  DATA_AVAILABLE,
  SELECTED_IMAGE_INDEX,
  SELECTED_IMAGES,
  ADD_IMAGE,
  HOME_RELOAD
} from "../actions";

const INITIAL_STATE = {
  data: [],
  loading: true,
  selectedImageIndex: 0,
  selectedImagesArray: [],
  homeReload: true
};

const DataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_AVAILABLE:
      return { ...state, data: action.data, loading: false };
    case ADD_IMAGE:
      return {
        ...state,
        selectedImagesArray: [...state.selectedImagesArray, action.data]
      };
    case SELECTED_IMAGE_INDEX:
      return { ...state, selectedImageIndex: action.data };
    case SELECTED_IMAGES:
      return { ...state, selectedImagesArray: action.data };
    case HOME_RELOAD:
      return { ...state, homeReload: action.data };
    default:
      return state;
  }
};

export default DataReducer;
