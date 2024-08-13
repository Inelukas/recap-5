import styled from "styled-components";
import Image from "next/image";

const StyledArtPiece = styled.div``;

export function ArtPiece({ src, name, artist }) {
  return (
    <StyledArtPiece>
      <h2>{name}</h2>
      <Image src={src} height={200} width={200} alt={name} />
      <h3>{artist}</h3>
    </StyledArtPiece>
  );
}
