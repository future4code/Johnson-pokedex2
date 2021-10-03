import styled from "styled-components";
import { backgroundCard } from "../../constants/colors";

export const PokeInfosContainer = styled.main`
  background-color: rgba(0,117,190);
  height: 80vh;
  margin: 0%;
  display: flex;
  justify-content: space-evenly;
`;

export const ImagesContainer = styled.div`
  align-self: center;
  height: 75%;
  display: flex;
  border-radius: 3%;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImgWrapper = styled.img`
  width: 200px;
  height: 200px;
  border: 1px solid black;
  border-radius: 3%;
  margin-top: 15px;
  background-color: white;
  box-shadow: 10px 5px 5px black;
  img {
    width: 100%;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  border-radius: 3%;
  flex-direction: column;
  text-align: center;
  margin-top: 15px;
  width: 200px;
  height: 415px;
  font-weight: bold;
  background-color: white;
  border: 1px solid black;
  justify-content: space-around;
  box-shadow: 10px 5px 5px black;
`;

export const TitleContainer = styled.h2`
  align-self: center;
`;

export const TypeAndMovesContainer = styled.div`
  align-self: center;
  height: 75%;
  width: 300px;
  box-shadow: 10px 5px 5px black;
  display: flex;
  border-radius: 3%;
  flex-direction: column;
  justify-content: space-between;
`;

export const TypesContainer = styled.div`
  background: ${backgroundCard};
  height: 10%;
  display: flex;
  box-shadow: 10px 5px 5px black;
  border-radius: 3%;
  justify-content: space-around;
`;

export const MovesContainer = styled.div`
  background: ${backgroundCard};
  display: flex;
  border-radius: 3%;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 415px;
  margin-top: 15px;
`;
