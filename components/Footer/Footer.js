import Link from "next/link";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  height: 10%;
  position: fixed;
  bottom: 0px;
  background: black;
  color: white;
  text-align: center;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Link href="/spotlight">Spotlight</Link>
    </StyledFooter>
  );
}
