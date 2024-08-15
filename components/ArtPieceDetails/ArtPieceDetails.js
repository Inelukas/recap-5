import styled from "styled-components";
import { ArtPiece } from "../Art Piece/ArtPiece";
import Link from "next/link";
import Image from "next/image";
import { CommentForm } from "../CommentForm/CommentForm";
import { Comment } from "../Comment/Comment";
import backButton from "../../assets/back.png";

const StyledArtPieceDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .button {
    position: absolute;
    top: 5px;
    left: 5px;

    button {
      background: none;
      border: none;
      cursor: pointer;
    }
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
          <button>
            <Image
              src={backButton}
              height={30}
              width={30}
              alt={"Back Button"}
            />
          </button>
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
