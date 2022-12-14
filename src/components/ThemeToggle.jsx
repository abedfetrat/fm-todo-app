import styled from "styled-components";
import { ReactComponent as SunIcon } from "../assets/images/icon-sun.svg";
import { ReactComponent as MoonIcon } from "../assets/images/icon-moon.svg";
import Button from "./Button";
import { useTheme } from "../providers/ThemeProvider";

const StyledButton = styled(Button)`
  line-height: 0;
  .theme-toggle-icon {
    width: 20px;
    height: 20px;

    @media screen and (min-width: 48em) {
      width: 26px;
      height: 26px;
    }
  }
`;

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <StyledButton onClick={toggleTheme} aria-label="toggle app theme">
      {theme === "light" ? (
        <MoonIcon className="theme-toggle-icon" />
      ) : (
        <SunIcon className="theme-toggle-icon" />
      )}
    </StyledButton>
  );
}

export default ThemeToggle;
