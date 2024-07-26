import styled from "styled-components";
import theme from "../../../../utils/theme";

export const TreeWrapper = styled.div<{ isWatered: boolean }>`
  height: 30px;
  width: 60px;
  margin-top: ${theme.spacing.LARGE};
  background-color: ${(props) => (props.isWatered ? "green" : "yellow")};
  display: flex;
`;
