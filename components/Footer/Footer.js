import Link from "next/link";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 100%;
  height: 10%;
  position: fixed;
  bottom: 0px;
  background: black;
  text-align: center;

  a {
    color: white;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Link href="/">Spotlight</Link>
      <Link href="/art-pieces">Art Pieces</Link>
      <Link href="/favorites">Favourites</Link>
    </StyledFooter>
  );
}
