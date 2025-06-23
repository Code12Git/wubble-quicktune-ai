import {
  FETCH_TRACK_FAILURE,
  FETCH_TRACK_REQUEST,
  FETCH_TRACK_SUCCESS,
  TOGGLE_LIKE_TRACK,
  TOGGLE_SAVED_TRACK,
} from "../actionTypes/musicTypes";

const initialState = {
  musicData: null,
  likedTracks: JSON.parse(localStorage.getItem("likedTracks")) || [],
  savedTracks:JSON.parse(localStorage.getItem('savedTracks')) || [],
  isLoading: false,
  error: null,
};

const musicReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_TRACK_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case FETCH_TRACK_SUCCESS:
      return {
        ...state,
        musicData: payload,
        isLoading: false,
      };

      case FETCH_TRACK_FAILURE:
        return {
          ...state,
          error:payload,
        };
    case TOGGLE_LIKE_TRACK: {
      const alreadyLiked = state.likedTracks.includes(payload);
      const updatedLikes = alreadyLiked
        ? state.likedTracks
        : [...state.likedTracks, payload];

      localStorage.setItem("likedTracks", JSON.stringify(updatedLikes));

      return {
        ...state,
        likedTracks: updatedLikes,
      };
    }

    case TOGGLE_SAVED_TRACK: {
      const alreadySaved = state.savedTracks.some(item => item.id === payload.id);
      const updatedData = alreadySaved
        ? state.savedTracks.filter(item=>item?.id!==payload?.id)
        : [...state.savedTracks, payload];
      localStorage.setItem("savedTracks", JSON.stringify(updatedData));
      return {
        ...state,
        savedTracks: updatedData,
      };
    }

    default:
      return state;
  }
};

export default musicReducer;
