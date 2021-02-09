import styled from "styled-components";

const Day = styled.div`
  padding: 0.5rem;
  border: 2px solid ${(props) => props.theme.colors.appBackground};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
`;
const DayBox = ({ children }) => {
  return <Day>{children}</Day>;
};

export default DayBox;
