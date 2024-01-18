import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Menu = (props) => {
  const { data, clicked, setclicked } = props;

  return (
    <>
      <div
        style={{
          display: `${clicked ? "flex" : "none"}`,
          padding: "24px",
          flexDirection: "column",
          position: "absolute",
          background: "#070724",
          zIndex: "1",
          width: " 100%",
          height: "100vh",
        }}
      >
        {data.map((planetName, index) => {
          return (
            <StyledLink onClick={()=> setclicked(false)} to={"/" + planetName.name} key={index}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <ColorDiv state={planetName}></ColorDiv>
                <Txt>{planetName.name}</Txt>
                <Img src="src/assets/icon-chevron.svg" />
              </div>
              <div
                style={{
                  height: "1px",
                  backgroundColor: "white",
                  opacity: "0.2",
                  marginTop: "20px",
                }}
              ></div>
            </StyledLink>
          );
        })}
      </div>
    </>
  );
};

export default Menu;

const MainDiv = styled.div``;
const ColorDiv = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => {
    const planetColors = {
      mercury: "#DEF4FC",
      venus: "#EDA249",
      earth: "#6D2ED5",
      mars: "#D14C32",
      jupiter: "#D83A34;",
      saturn: "#CD5120;",
      uranus: "#1EC1A2",
      neptune: "#2D68F0",
    };

    return planetColors[props.state.name.toLowerCase()];
  }};
  border-radius: 50%;
`;

const Txt = styled.p`
  color: #fff;
  font-family: Spartan;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 166.667% */
  letter-spacing: 1.364px;
  text-transform: uppercase;
  margin-left: 25px;
`;

const Img = styled.img`
  width: 4px;
  height: 8px;
  margin-left: auto;
`;
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;
