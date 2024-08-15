import { ArtPiece } from "@/components/Art Piece/ArtPiece";
import Link from "next/link";
import styled from "styled-components";

const StyledArtPieces = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export default function HomePage({ data, onToggleFavourite, artPiecesInfo }) {
  console.log(artPiecesInfo);
  return (
    <StyledArtPieces>
      {data.map((artPiece, index) => {
        return (
          <ArtPiece
            key={index}
            src={data[index].imageSource}
            artPiece={artPiece}
            onToggleFavourite={onToggleFavourite}
            artPiecesInfo={artPiecesInfo}
            showButton={true}
          />
        );
      })}
    </StyledArtPieces>
  );
}
