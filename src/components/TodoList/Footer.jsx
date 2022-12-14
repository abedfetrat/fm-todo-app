import styled from "styled-components";
import Filters from "./Filters";
import Button from "../Button";
import useMediaQuery from "../../hooks/useMediaQuery";
import { motion } from "framer-motion";

const StyledDiv = styled(motion.div)`
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  background-color: var(--color-surface);

  @media screen and (min-width: 48em) {
    padding: 20px 24px;
  }
`;

function Footer({ uncompletedCount, onClearCompleted }) {
  const isTablet = useMediaQuery("(min-width: 48em)");

  return (
    <StyledDiv layout>
      <p>{uncompletedCount} items left</p>
      {isTablet && <Filters />}
      <Button onClick={onClearCompleted}>Clear completed</Button>
    </StyledDiv>
  );
}

export default Footer;
