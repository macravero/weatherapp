import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { LocationState } from "../contexts/Location/LocationState";
import theme from "../theme";
import ForecastDisplay from "../views/ForecastDisplay";

describe("ForecastDisplay view component test suite", () => {
  const mockData = {
    current: {
      weather: [{ main: "Drizzle" }],
      temp: "23.65",
    },
    daily: [
      {
        weather: [{ main: "Drizzle" }],
        temp: {
          day: "23.65",
        },
        dt: 1,
      },
      {
        weather: [{ main: "Clouds" }],
        temp: {
          day: "21.3",
        },
        dt: 2,
      },
      {
        weather: [{ main: "Clear" }],
        temp: {
          day: "22",
        },
        dt: 3,
      },
      {
        weather: [{ main: "Sand" }],
        temp: {
          day: "-2",
        },
        dt: 4,
      },
      {
        weather: [{ main: "Thunderstorm" }],
        temp: {
          day: "26",
        },
        dt: 5,
      },
    ],
  };
  const renderComponent = ({ theme, forecast }) =>
    render(
      <ThemeProvider theme={theme}>
        <LocationState>
          <ForecastDisplay forecast={forecast} />
        </LocationState>
      </ThemeProvider>
    );
  test("Renders correctly", () => {
    let { container, queryByTestId, queryAllByTestId } = renderComponent({
      theme: theme,
      forecast: mockData,
    });
    const temperatures = queryAllByTestId(/temp/i);
    expect(temperatures[0]).toHaveTextContent("24C°");
    expect(temperatures[0]).not.toHaveTextContent("20C°");
    expect(temperatures[1]).toHaveTextContent("21C°");
    expect(temperatures[1]).not.toHaveTextContent("-18C°");
    const todayWeather = queryByTestId(/main/i);
    expect(todayWeather).toHaveTextContent("Drizzle");
    expect(todayWeather).not.toHaveTextContent("Clouds");
    const iconTitles = container.querySelectorAll("svg title");
    expect(iconTitles[0]).toHaveTextContent("Drizzle");
    expect(iconTitles[0]).not.toHaveTextContent("Thunderstorm");
    expect(iconTitles[1]).toHaveTextContent("Clouds");
    expect(iconTitles[1]).not.toHaveTextContent("Thunderstorm");
  });
});
