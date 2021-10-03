import styled from "styled-components";
import { mainColor } from "../../constants/colors";

export const HeaderContainer = styled.header`
display: flex;
align-items: center;
background-color:#1B53BA;
width: 100%;
height: 5vw;
justify-content: space-between;
padding: 16px;
`;

export const LeftHeaderButton = styled.button`
  display: flex;
  column-gap: 16px;
  margin-right: 30px;
  height: 30px;
`;

export const RightHeaderButton = styled.button`
    display: flex;
  column-gap: 16px;
  margin-right: 30px;
  height: 30px;
`;

export const PictureHeaderHome = styled.img`
width: 40px;
margin-left: 30px;
`
