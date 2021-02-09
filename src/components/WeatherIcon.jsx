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
  Thunderstorm: <WiThunderstorm />,
  Drizzle: <WiSprinkle />,
  Rain: <WiRain />,
  Snow: <WiSnow />,
  Mist: <WiDayFog />,
  Smoke: <WiSmoke />,
  Haze: <WiDayHaze />,
  Dust: <WiDust />,
  Fog: <WiDayFog />,
  Sand: <WiSandstorm />,
  Ash: <WiDayFog />,
  Squall: <WiSandstorm />,
  Tornado: <WiTornado />,
  Clear: <WiDaySunny />,
  Clouds: <WiCloudy />,
};
const Icon = ({ status, size, theme }) => {
  return (
    <IconContext.Provider value={{ size: size || theme.sizes.iconSize }}>
      {iconObject[status]}
    </IconContext.Provider>
  );
};

export default withTheme(Icon);
