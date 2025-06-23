import { 
  FETCH_TRACK_REQUEST,
  FETCH_TRACK_SUCCESS,
  FETCH_TRACK_FAILURE,
  TOGGLE_SAVED_TRACK
} from '../actionTypes/musicTypes'
import { publicRequest } from '../../helpers/axios';

export const fetchAudio = (mood, genre, audioData) => async (dispatch) => {
  dispatch({ type: FETCH_TRACK_REQUEST });

  try {
    const response = await publicRequest.post('/music', { mood, genre, audioData });
    
    setTimeout(() => {
      dispatch({
        type: FETCH_TRACK_SUCCESS,
        payload: response.data.data,
      });
    }, 2000);

    return response.data;
  } catch (error) {
    dispatch({
      type: FETCH_TRACK_FAILURE,
      payload:
        error.response?.data?.code?.message ||
        error.response?.data?.message ||
        error.message ||
        "Error Fetching Track Record",
    });
  }
};


export const toggleSavedTrack = (track) => {
  return {
    type: TOGGLE_SAVED_TRACK,
    payload: track,
  };
};
