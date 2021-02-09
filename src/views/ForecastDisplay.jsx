import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import RemainingWeekDisplay from "./RemainingWeekDisplay";
import { tempConverter } from "../utils/parsers";
import Icon from "../components/WeatherIcon";

const ForecastContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DayWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;
const ForecastDisplay = ({ forecast }) => {
  let week = forecast.daily.slice(2);
  week.length = 4;
  return (
    <ForecastContainer>
      <Title color="white" fontSize="2rem">
        <span>Forecast for</span> today
      </Title>
      <DayWrapper>
        <Icon status={forecast.current.weather[0].main} />
        <Title color="white" fontSize="2rem">
          {forecast.current.weather[0].main}
        </Title>
        <Title color="white" fontSize="2rem">
          <span>
            {tempConverter(forecast.current.temp)}
            <sup>C°</sup>
          </span>
        </Title>
      </DayWrapper>
      <DayWrapper>
        <Title fontSize="1.6rem" color="white" w100>
          Tomorrow:
        </Title>
        <Icon size="4rem" status={forecast.daily[1].weather[0].main} />
        <Title fontSize="1.6rem" color="white">
          <span>
            {tempConverter(forecast.daily[1].temp.day)}
            <sup>C°</sup>
          </span>
        </Title>
      </DayWrapper>
      <RemainingWeekDisplay week={week} />
    </ForecastContainer>
  );
};

export default ForecastDisplay;
