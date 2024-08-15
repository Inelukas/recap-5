import styled from "styled-components";
import { ArtPiece } from "../Art Piece/ArtPiece";
import Image from "next/image";
import Link from "next/link";
import FavouriteButton from "../FavouriteButton/FavouriteButton";
import { CommentForm } from "../CommentForm/CommentForm";
import { Comment } from "../Comment/Comment";

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

const StyledCommentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function ArtPieceDetails({
  data,
  artPiecesInfo,
  onToggleFavourite,
  onSubmitComment,
}) {
  const currentArtPiece = artPiecesInfo.find((artPiece) => {
    return artPiece.slug === data.slug;
  });

  console.log(currentArtPiece);

  return (
    <>
      <StyledArtPieceDetails>
        <ArtPiece
          src={data.imageSource}
          artPiece={data}
          artPiecesInfo={artPiecesInfo}
          onToggleFavourite={onToggleFavourite}
          showButton={true}
          detailed={true}
        />
        <Link href="/art-pieces" className="button">
          <button>Back</button>
        </Link>
      </StyledArtPieceDetails>
      <StyledCommentSection>
        <CommentForm onSubmitComment={onSubmitComment} slug={data.slug} />
        {currentArtPiece.comments.map((comment, index) => {
          return <Comment key={index} comment={comment} />;
        })}
      </StyledCommentSection>
    </>
  );
}
