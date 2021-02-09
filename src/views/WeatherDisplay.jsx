import { useState, useEffect } from "react";
import styled from "styled-components";
import { withTheme } from "styled-components";
import { weatherInstance } from "../utils/constants";
import { useLocation } from "../contexts/Location/LocationState";
import ForecastDisplay from "./ForecastDisplay";
import { StyledWrapper } from "../components/Wrapper";
import Title from "../components/Title";
import ReactLoading from "react-loading";
import CurrentLocationBackground from "../assets/currentLocationBg.png";

const WeatherWrapper = styled(StyledWrapper)`
  background: url(${(props) => props.background}) no-repeat top center;
  color: white;
  width: 500px;
  @media (max-width: 880px) {
    background: ${(props) => props.theme.colors.active};
    width: 100%;
  }
`;
const WeatherDisplay = ({ theme }) => {
  const [{ status, forecast }, setState] = useState({
    status: "pending",
    forecast: null,
    error: null,
  });
  const [locationState] = useLocation();
  const { location, loading } = locationState;

  useEffect(() => {
    setState({ status: "pending" });
    if (loading) {
      return;
    }
    const getWeather = () => {
      weatherInstance
        .get(
          `onecall?units=metric&exclude=minutely,hourly,alerts&lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          setState({
            status: "resolved",
            forecast: res.data,
          });
        })
        .catch((error) => {
          setState({ status: "rejected", error });
          throw error;
        });
    };
    getWeather();
  }, [location, loading]);

  if (!location) {
    return <WeatherWrapper>"Select a city!"</WeatherWrapper>;
  } else if (status === "pending") {
    return (
      <WeatherWrapper>
        <ReactLoading type={"spinningBubbles"} color={theme.colors.main} />
      </WeatherWrapper>
    );
  } else if (status === "rejected") {
    return (
      <WeatherWrapper>
        <Title fontSize="1.6rem" color={theme.colors.main}>
          There was an error getting the forecast info. Try another city
        </Title>
      </WeatherWrapper>
    );
  } else {
    return (
      <WeatherWrapper background={CurrentLocationBackground}>
        <Title>{location.name}</Title>
        <ForecastDisplay forecast={forecast} />
      </WeatherWrapper>
    );
  }
};

export default withTheme(WeatherDisplay);
