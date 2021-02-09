import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1rem;
  font-size: ${(props) => props.theme.sizes.medium};
  color: ${(props) => props.theme.colors.main};
  background: ${(props) => props.theme.colors.appBackground};
  border: 2px solid ${(props) => props.theme.colors.main};
  width: ${(props) => props.theme.sizes.buttonWidth};
  // active states switch
  background: ${(props) =>
    props.active
      ? props.theme.colors.active
      : props.theme.colors.appBackground};
  border: 2px solid
    ${(props) =>
      props.active ? props.theme.colors.success : props.theme.colors.main};
  margin: ${(props) => props.theme.margins.buttonMargin};
  // hover
  &:hover {
    background: ${(props) => props.theme.colors.success};
    border: ${(props) => props.theme.colors.active};
  }
  &:focus {
    outline: red auto 2px;
  }
`;
const Button = ({ onClick, active, children }) => {
  return (
    <StyledButton onClick={onClick} active={active} role="button">
      {children}
    </StyledButton>
  );
};

export default Button;
