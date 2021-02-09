import React from "react";
import styled from "styled-components";
import { Subtitle } from "../components/Title";
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
      <Subtitle testid>
        <span>Forecast for</span> today
      </Subtitle>
      <DayWrapper>
        <Icon status={forecast.current.weather[0].main} testid="icon" />
        <Subtitle testid="main">{forecast.current.weather[0].main}</Subtitle>
        <Subtitle testid="temp">
          <span>
            {tempConverter(forecast.current.temp)}
            <sup>C°</sup>
          </span>
        </Subtitle>
      </DayWrapper>
      <DayWrapper>
        <Subtitle fontSize="1.6rem" w100>
          Tomorrow:
        </Subtitle>
        <Icon
          size="4rem"
          status={forecast.daily[1].weather[0].main}
          testid="icon"
        />
        <Subtitle fontSize="1.6rem" testid="temp">
          <span>
            {tempConverter(forecast.daily[1].temp.day)}
            <sup>C°</sup>
          </span>
        </Subtitle>
      </DayWrapper>
      <RemainingWeekDisplay week={week} />
    </ForecastContainer>
  );
};

export default ForecastDisplay;
