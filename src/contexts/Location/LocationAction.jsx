import { locationInstance } from "../../utils/constants";

export const setLoading = (dispatch, status) =>
  dispatch({ type: "SET_LOADING", payload: status });

export const setError = (dispatch, error, message) =>
  dispatch({
    type: "SET_ERROR",
    payload: { error: error.status, message: message },
  });

export const setLocation = (dispatch, location) =>
  dispatch({
    type: "SET_LOCATION",
    payload: location,
  });

export const getLocation = async (dispatch) => {
  setLoading(dispatch, true);
  await locationInstance
    .get()
    .then((res) => {
      if (res.data.status === "fail") {
        dispatch({
          type: "SET_ERROR",
          payload: {
            error: true,
            message: "there was an error fetching your location",
          },
        });
      } else {
        let location = {
          name: res.data.city,
          lat: res.data.lat,
          lon: res.data.lon,
        };
        dispatch({
          type: "SET_LOCATION",
          payload: location,
        });
        dispatch({
          type: "SET_LOCATION_LIST",
          payload: location,
        });
        dispatch({
          type: "SET_LOADING",
          payload: false,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: "SET_ERROR",
        payload: {
          error: true,
          message: error.message,
        },
      });
    });
};
