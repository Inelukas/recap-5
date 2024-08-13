import styled from "styled-components";
import Image from "next/image";

const StyledArtPiece = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 600px;
  border: 2px solid black;
`;

export function ArtPiece({ src, name, artist }) {
  return (
    <StyledArtPiece>
      <h2>{name}</h2>
      <Image src={src} height={400} width={400} alt={name} />
      <h3>{artist}</h3>
    </StyledArtPiece>
  );
}
