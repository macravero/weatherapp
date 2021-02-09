const LocationReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOCATION":
      return {
        ...state,
        location: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload.error,
        message: action.payload.message,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SET_LOCATION_LIST":
      return {
        ...state,
        locationList: [action.payload, ...state.locationList],
      };
    default:
      return state;
  }
};

export default LocationReducer;
