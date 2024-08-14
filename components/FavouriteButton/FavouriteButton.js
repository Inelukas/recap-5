import styled from "styled-components";
import HeartIcon from "../../assets/heart.svg";

const StyledFavouriteButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;

  .circle {
    border-radius: 100px;
    background: ${({ isFavourite }) => (isFavourite ? "red" : "white")};
    border: 2px solid black;
    width: 45px;
    height: 45px;
    position: relative;
  }

  svg {
    width: 40px;
    height: 40px;
    position: absolute;
    right: 1px;
    top: 2px;
  }
`;

export default function FavouriteButton({
  onToggleFavourite,
  artPiecesInfo,
  slug,
}) {
  const isFavourite = artPiecesInfo.find((artPiece) => {
    return artPiece.slug === slug;
  }).isFavourite;

  return (
    <StyledFavouriteButton isFavourite={isFavourite}>
      <div className="circle">
        <HeartIcon onClick={onToggleFavourite} />
      </div>
    </StyledFavouriteButton>
  );
}
