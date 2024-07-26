import styled from "styled-components";

export const HomepageWrapper = styled.div`
  display: grid;
  grid-template:
    "header" minmax(0px, 60px)
    "name" minmax(0px, 30px)
    "actions" minmax(0px, 30px)
    "main" minmax(190px, auto)
    "footer" minmax(0px, 60px);
  background-color: darkseagreen;
  gap: 10px;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const CheckCard = styled.button`
  background-color: lightblue;
  grid-area: actions;
  display: block;
  color: black;
  height: 20px;
  width: 60px;
  margin-left: 10px;
  border-radius: 10px;
`;
