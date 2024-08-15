import { ArtPiece } from "@/components/Art Piece/ArtPiece";
import styled from "styled-components";

const StyledFavorites = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export default function FavoritesPage({
  data,
  onToggleFavourite,
  artPiecesInfo,
}) {
  const favouritesArtPieces = artPiecesInfo.filter(
    (artPiece) => artPiece.isFavourite
  );

  console.log(favouritesArtPieces);

  return (
    <StyledFavorites>
      {favouritesArtPieces.length === 0 ? (
        <h1>No favourites</h1>
      ) : (
        favouritesArtPieces.map((favouriteArtPiece, index) => {
          const artPieceToBeRendered = data.find((artPiece) => {
            return artPiece.slug === favouriteArtPiece.slug;
          });

          if (!artPieceToBeRendered) return null;

          return (
            <ArtPiece
              key={index}
              src={artPieceToBeRendered.imageSource}
              artPiece={artPieceToBeRendered}
              onToggleFavourite={onToggleFavourite}
              artPiecesInfo={artPiecesInfo}
              showButton={true}
            />
          );
        })
      )}
    </StyledFavorites>
  );
}
