import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../actionTypes/musicTypes";

const initialState = {
  userData: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
  token: null
};

const musicReducer = (state = initialState, action) => {
  const { type, payload } = action;
  
  switch (type) {
    // REGISTER
    case REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userData: payload.user,
        isAuthenticated: true,
        token: payload.token,
        error: null
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload
      };

    // LOGIN
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userData: payload.user,
        isAuthenticated: true,
        token: payload.token,
        error: null
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload
      };

    default:
      return state;
  }
};

export default musicReducer;