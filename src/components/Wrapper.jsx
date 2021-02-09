import styled from "styled-components";

export const StyledWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  flex-wrap: wrap;
  flex-grow: ${(props) => props.grow || 1};
  min-width: 300px;
  background: ${(props) => props.theme.colors.white};
  background-image: ${(props) => props.bgImage};
  padding: ${(props) => props.theme.paddings.wrapperPadding};
`;

const Wrapper = ({ grow, bgImage, children }) => {
  return (
    <StyledWrapper grow={grow} bgImage={bgImage}>
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;
