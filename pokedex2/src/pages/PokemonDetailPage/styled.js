import styled from "styled-components";
import { backgroundCard } from "../../constants/colors";


export const PokeInfosContainer = styled.main`
  background-color: #223d6e;
  height: 100vh;
  margin: 0;
  padding: 16px;;
  display: flex;
  justify-content: space-around;
  
`;

export const ImagesContainer = styled.div`
  align-self: center;
  height: 70%;
  display: flex;
  border-radius: 3%;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ImgWrapper = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 3%;
  background-color: white;
  box-shadow: 4px 4px 8px;;
  img {
    width: 100%;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  border-radius: 3%;
  flex-direction: column;
  margin-top: 100px;
  padding:12px;
  width: 300px;
  height: 500px;
  background-color: white;
  border: none;
  justify-content: space-around;
  box-shadow: 4px 4px 8px;
  & p{
    font-size: 20px;
    letter-spacing: 4px;
    padding-left: 18px;
  }
`;

export const TitleContainer = styled.h2`
  align-self: center;
  
`;

export const TypeAndMovesContainer = styled.div`
  align-self: center;
  height: 60%;
  width: 300px;
  display: flex;
  border-radius: 30%;
  flex-direction: column;
  justify-content: space-between;
  
`;

export const TypesContainer = styled.div`
  background: ${backgroundCard};
  height: 50px;
  width: 300px;
  display: flex;
  box-shadow: 4px 4px 8px;
  border-radius: 8px;
  justify-content: center;
  padding: 7.5px;
  
  
  
`;

export const MovesContainer = styled.div`
  background: ${backgroundCard};
  display: flex;
  border-radius: 3%;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 500px;
  margin-top: 10px;
  padding: 8px;
  box-shadow: 4px 4px 8px;

  & p{
    font-size: 20px;
    letter-spacing: 4px;
    padding-left: 18px;
  }
`;

