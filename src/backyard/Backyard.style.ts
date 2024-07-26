import styled from "styled-components";
import theme from "../utils/theme";

export const BackyardWrapper = styled.div`
  display: grid;
  grid-template:
    "header" minmax(0px, 60px)
    "name" minmax(0px, 30px)
    "actions" minmax(0px, 30px)
    "main" minmax(190px, auto)
    "footer" minmax(0px, 60px);
  background-color: darkseagreen;
  gap: ${theme.spacing.SMALL};
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const TestWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const ScreenName = styled.div`
  grid-area: name;
  display: block;
  margin-left: ${theme.spacing.LARGE};
`;

export const WaterPlants = styled.button`
  background-color: ${theme.colors.BLUE};
  grid-area: actions;
  display: block;
  color: black;
  height: 20px;
  width: 50px;
  margin-left: ${theme.spacing.LARGE};
  border-radius: ${theme.borderRadius.DEFAULT};
`;
