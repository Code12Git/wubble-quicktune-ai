import {
  FETCH_TRACK_REQUEST,
  FETCH_TRACK_SUCCESS,
} from "../actionTypes/musicTypes";

const initialState = {
  musicData: null, 
   isLoading: false,
  error: null,
};

const musicReducer = (state = initialState, action) => {
  const { type, payload } = action;
  
  switch (type) {
  case FETCH_TRACK_REQUEST:
    return {
      ...state,
      isLoading:true,
      error:false
    }

  case FETCH_TRACK_SUCCESS:
    console.log(payload)
    return {
      ...state,
      musicData:payload
    }  
  

    default:
      return state;
  }
};

export default musicReducer;