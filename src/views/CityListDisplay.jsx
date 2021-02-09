import { useEffect } from "react";

import Button from "../components/Button";
import Wrapper from "../components/Wrapper";
import { useLocation } from "../contexts/Location/LocationState";
import {
  getLocation,
  setLoading,
  setLocation,
} from "../contexts/Location/LocationAction";

const CitySelector = () => {
  const [locationState, locationDispatch] = useLocation();
  const { location, locationList, loading } = locationState;

  useEffect(() => {
    const getLocationHandler = async () => {
      await getLocation(locationDispatch);
      setLoading(locationDispatch, false);
    };
    getLocationHandler();
  }, [locationDispatch]);

  const updateLocationHandler = (location) => {
    setLocation(locationDispatch, location);
  };
  return (
    <Wrapper grow="2">
      {loading && <p>Loading...</p>}
      {!loading &&
        locationList.map((cityOption) => (
          <Button
            key={cityOption.name}
            active={cityOption.name === location.name}
            onClick={() =>
              updateLocationHandler({
                name: cityOption.name,
                lat: cityOption.lat,
                lon: cityOption.lon,
              })
            }
          >
            {cityOption.name}
          </Button>
        ))}
    </Wrapper>
  );
};

export default CitySelector;
