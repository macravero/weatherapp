import { ErrorBoundary } from "react-error-boundary";
import styled from "styled-components";
import WeatherDisplay from "./views/WeatherDisplay";
import ErrorFallback from "./components/ErrorFallback";
import CitySelector from "./views/CityListDisplay";
// import { locationInstance } from "./utils/constants";
import { LocationState } from "./contexts/Location/LocationState";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.appBackground};
  padding: 2rem;
  display: flex;
  flex-wrap: nowrap;
  height: 75vh;
  min-height: 550px;
  overflow: auto;
  @media (max-width: 880px) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 0;
  }
`;
function App() {
  return (
    <Wrapper>
      <LocationState>
        {/* <ErrorBoundary FallbackComponent={ErrorFallback}> */}
        <CitySelector />
        {/* </ErrorBoundary> */}
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <WeatherDisplay />
        </ErrorBoundary>
      </LocationState>
    </Wrapper>
  );
}

export default App;
