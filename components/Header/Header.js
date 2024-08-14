import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 100%;
  height: 10%;
  position: fixed;
  top: 0px;
  background: black;
  color: white;
  text-align: center;
  z-index: 2;

  a {
    color: white;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Art Gallery</h1>
    </StyledHeader>
  );
}
