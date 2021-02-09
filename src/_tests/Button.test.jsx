import { render, fireEvent, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import Button from "../components/Button";

describe("Button component test suite", () => {
  const clicked = jest.fn();
  const renderComponent = ({ theme, onClick, active, children }) =>
    render(
      <ThemeProvider theme={theme}>
        <Button onClick={onClick} active={active} children={children}>
          {children}
        </Button>
      </ThemeProvider>
    );
  test("Button component renders with props", async () => {
    renderComponent({
      theme: theme,
      onClick: clicked,
      children: "CITY NAME",
    });
    await screen.findByText("CITY NAME");
  });
  test("Button component renders with correct styling", async () => {
    renderComponent({
      theme: theme,
      onClick: clicked,
      active: false,
      children: "INACTIVE",
    });
    const btn = await screen.findByText("INACTIVE");
    expect(btn).toHaveStyle("background: #EAEAEC");
    expect(btn).not.toHaveStyle("background: #48D0D0");
  });
  test("active Button component renders with correct styling", async () => {
    renderComponent({
      theme: theme,
      onClick: clicked,
      active: true,
      children: "ACTIVE BUTTON",
    });
    const btn = await screen.findByText("ACTIVE BUTTON");
    expect(btn).not.toHaveStyle("background: #EAEAEC");
    expect(btn).toHaveStyle("background: #48D0D0");
  });
  test("Button callback should be executed on click", async () => {
    renderComponent({
      theme: theme,
      onClick: clicked,
      children: "ANOTHER CITY NAME",
    });
    const btn = await screen.findByText("ANOTHER CITY NAME");
    fireEvent.click(btn);
    expect(clicked).toHaveBeenCalled();
  });
});
