import styled from "styled-components";
import Icon from "../components/WeatherIcon";
import Box from "../components/DayBox";
import { tempConverter, dayParser } from "../utils/parsers";

const WeekWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const RemainingWeekDisplay = ({ week }) => {
  return (
    <WeekWrapper>
      {week.map((day) => {
        return (
          <Box key={day.dt}>
            <p>{dayParser(day.dt)}</p>
            <Icon size="2rem" status={day.weather[0].main} />
            <p>{tempConverter(day.temp.day)}</p>
          </Box>
        );
      })}
    </WeekWrapper>
  );
};

export default RemainingWeekDisplay;
