import data from "../../app/assets/data.json";

export const DATA_AVAILABLE = "DATA_AVAILABLE";
export const SELECTED_IMAGE_INDEX = "SELECTED_IMAGE_INDEX";
export const SELECTED_IMAGES = "SELECTED_IMAGES";
export const ADD_IMAGE = "ADD_IMAGE";

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

export function addSelectedImage(item) {
  return dispatch => {
    dispatch({ type: ADD_IMAGE, data: item });
  };
}

export function selectedImages(imageArr) {
  return dispatch => {
    dispatch({ type: SELECTED_IMAGES, data: imageArr });
  };
}
