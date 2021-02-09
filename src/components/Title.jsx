import styled from "styled-components";

const StyledHeading = styled.h1`
  color: ${(props) => props.color || props.theme.colors.main};
  font-size: ${(props) => props.fontSize || props.theme.fontSizes.xlarge};
  font-weight: 800;
  width: ${(props) => (props.w100 ? "100%" : "auto")};
  & > span {
    font-weight: 400;
    & > sup {
      font-size: ${(props) => props.supSize || props.theme.fontSizes.small};
    }
  }
`;
const StyledSubheading = styled.h2`
  color: ${(props) => props.color || props.theme.colors.main};
  font-size: ${(props) => props.fontSize || props.theme.fontSizes.large};
  font-weight: 800;
  width: ${(props) => (props.w100 ? "100%" : "auto")};
  & > span {
    font-weight: 400;
    & > sup {
      font-size: ${(props) => props.supSize || props.theme.fontSizes.small};
    }
  }
`;
export const Subtitle = ({ fontSize, color, supSize, w100, children }) => {
  <StyledSubheading
    fontSize={fontSize}
    supSize={supSize}
    color={color}
    w100={w100}
  >
    {children}
  </StyledSubheading>;
};

const Title = ({ fontSize, color, supSize, w100, children }) => {
  return (
    <StyledHeading
      fontSize={fontSize}
      supSize={supSize}
      color={color}
      w100={w100}
    >
      {children}
    </StyledHeading>
  );
};

export default Title;
