import {
  WiThunderstorm,
  WiSprinkle,
  WiRain,
  WiSnow,
  WiDayFog,
  WiSmoke,
  WiDayHaze,
  WiDust,
  WiSandstorm,
  WiTornado,
  WiDaySunny,
  WiCloudy,
} from "react-icons/wi";
import { IconContext } from "react-icons";
import { withTheme } from "styled-components";

const iconObject = {
  Thunderstorm: <WiThunderstorm title="Thunderstorm" />,
  Drizzle: <WiSprinkle title="Drizzle" />,
  Rain: <WiRain title="Rain" />,
  Snow: <WiSnow title="Snow" />,
  Mist: <WiDayFog title="Mist" />,
  Smoke: <WiSmoke title="Smoke" />,
  Haze: <WiDayHaze title="Haze" />,
  Dust: <WiDust title="Dust" />,
  Fog: <WiDayFog title="Fog" />,
  Sand: <WiSandstorm title="Sand" />,
  Ash: <WiDayFog title="Ash" />,
  Squall: <WiSandstorm title="Squall" />,
  Tornado: <WiTornado title="Tornado" />,
  Clear: <WiDaySunny title="Clear" />,
  Clouds: <WiCloudy title="Clouds" />,
};
const Icon = ({ status, size, theme }) => {
  return (
    <IconContext.Provider value={{ size: size || theme.sizes.iconSize }}>
      {iconObject[status]}
    </IconContext.Provider>
  );
};

export default withTheme(Icon);
