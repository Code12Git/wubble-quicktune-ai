import { 
  FETCH_TRACK_REQUEST,
  FETCH_TRACK_SUCCESS,
  FETCH_TRACK_FAILURE
} from '../actionTypes/musicTypes'
import { publicRequest } from '../../helpers/axios';

export const fetchAudio = (mood,genre,audioData) => async (dispatch) => {
  dispatch({ type: FETCH_TRACK_REQUEST });
    console.log(mood,genre,audioData)
  try {
    const response = await publicRequest.post('/music',{mood,genre,audioData});
    console.log(response)
    dispatch({ 
      type: FETCH_TRACK_SUCCESS, 
      payload:response.data.data
    });
    return response.data;
  } catch (error) {
    dispatch({
      type: FETCH_TRACK_FAILURE,
      payload: error.response?.data?.code?.message || 
              error.response?.data?.message || 
              error.message || 
              'Error  Fetching Track Record'
    });
  }
};
