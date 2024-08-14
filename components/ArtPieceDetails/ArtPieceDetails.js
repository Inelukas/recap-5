import styled from "styled-components";
import { ArtPiece } from "../Art Piece/ArtPiece";
import Image from "next/image";
import Link from "next/link";
import FavouriteButton from "../FavouriteButton/FavouriteButton";

const StyledArtPieceDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 600px;
  border: 2px solid black;
  gap: 20px;
  position: relative;

  .button {
    position: absolute;
    top: 5px;
    left: 5px;
  }
`;

export function ArtPieceDetails({ data, artPiecesInfo, onToggleFavourite }) {
  return (
    <StyledArtPieceDetails>
      <ArtPiece
        src={data.imageSource}
        name={data.name}
        artist={data.artist}
        slug={data.slug}
        artPiecesInfo={artPiecesInfo}
        onToggleFavourite={onToggleFavourite}
        showButton={true}
      />
      <span>
        Year: {data.year}&nbsp;-&nbsp; Genre: {data.genre}
      </span>
      <Link href="/art-pieces" className="button">
        <button>Back</button>
      </Link>
    </StyledArtPieceDetails>
  );
}
