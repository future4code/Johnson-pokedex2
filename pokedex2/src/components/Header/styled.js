import styled from "styled-components";
import { mainColor } from "../../constants/colors";

export const HeaderContainer = styled.header`
display: flex;
align-items: center;
text-align: center;
padding: 1%;
background-color:#1B53BA;
width: 98%;
height: 4vw;
justify-content: space-between;

h1{
  color: white;
  letter-spacing: 6px;
}
`;

export const LeftHeaderButton = styled.button`
  color: #1B53BA;
  border: none;
  background-color: #ffcc00;
  border-radius: 15px;
  font-size: 1.5rem;
  text-align: center;
  padding: 0.5%;
  margin: 12px;
`;

export const RightHeaderButton = styled.button`
  display: flex;
  column-gap: 16px;
  padding-right: 30px;
  height: 30px;
`;

export const PictureHeaderHome = styled.img`
width: 40px;
margin-left: 30px;
`
