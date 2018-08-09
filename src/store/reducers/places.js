import * as actions from '../actions/actionTypes'
const intialState = {
  places: []
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actions.ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random().toString(),
          text:action.placeName,
          image: {
            uri: "https://images.unsplash.com/photo-1530888571925-c766bb10af92?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=755b031de4778851ef0db28deffa30b2&auto=format&fit=crop&w=800&q=80"
          }
        })
      }
      break;
    case actions.DELETE_PLACE:
      return {
        ...state,
        places:state.places.filter(place=>{
          return place.key !== action.placeKey
        })
      }
      break;
    default:
      return state;

  }
};

export default reducer;
