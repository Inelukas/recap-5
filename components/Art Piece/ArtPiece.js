import styled from "styled-components";
import Image from "next/image";
import FavouriteButton from "../FavouriteButton/FavouriteButton";
import Link from "next/link";

const StyledArtPiece = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;
  border: 2px solid black;
  position: relative;

  .colors {
    display: flex;
  }

  .color {
    width: 20px;
    height: 20px;
    border-radius: 100px;
  }
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
        <Image src={src} height={280} width={280} alt={artPiece.name} />
      </Link>
      {detailed ? (
        <div className="colors">
          {artPiece.colors.map((color, index) => {
            return (
              <div
                key={index}
                className="color"
                style={{ background: color }}
              />
            );
          })}
        </div>
      ) : null}
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
