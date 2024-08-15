import styled from "styled-components";
import Image from "next/image";
import FavouriteButton from "../FavouriteButton/FavouriteButton";
import Link from "next/link";

const StyledArtPiece = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 600px;
  border: 2px solid black;
  position: relative;
`;

export function ArtPiece({
  src,
  artPiece,
  onToggleFavourite,
  artPiecesInfo,
  showButton,
  detailed = false,
}) {
  return (
    <StyledArtPiece>
      <h2>{artPiece.name}</h2>
      <Link href={`/art-pieces/${artPiece.slug}`}>
        <Image src={src} height={400} width={400} alt={artPiece.name} />
      </Link>
      <h3>{artPiece.artist}</h3>
      {detailed ? (
        <span>
          Year: {artPiece.year}&nbsp;-&nbsp; Genre: {artPiece.genre}
        </span>
      ) : null}
      {!showButton ? null : (
        <FavouriteButton
          onToggleFavourite={() => onToggleFavourite(artPiece.slug)}
          artPiecesInfo={artPiecesInfo}
          slug={artPiece.slug}
        />
      )}
    </StyledArtPiece>
  );
}
