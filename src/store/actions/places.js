import * as actions from './actionTypes';

export const addPlace = (placeName)=> {
  return {
    type:actions.ADD_PLACE,
    placeName
  }
}
export const deletePlace = ()=> {
  return {
    type:actions.DELETE_PLACE
  }
}
export const selectPlace = (placekey)=> {
  return {
    type:actions.SELECT_PLACE,
    placekey
  }
}
export const deselectPlace = ()=> {
  return {
    type:actions.DESELECT_PLACE
  }
}
