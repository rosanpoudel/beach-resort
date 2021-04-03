import styled from "styled-components";
import defaultImg from "../assets/images/room-1.jpeg";

const StyledHero = styled.header`
  background: url(${(props) => (props.img ? props.img : defaultImg)}) 50% /
    cover no-repeat;
  height: calc(100vh - 72px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyledHero;
