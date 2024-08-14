import styled from "styled-components";
import { ArtPiece } from "@/components/Art Piece/ArtPiece";
import { ArtPieceDetails } from "@/components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";

export default function _slug({ data, artPiecesInfo, onToggleFavourite }) {
  const router = useRouter();
  const { slug } = router.query;

  const artDetailData = data.filter((artPiece) => {
    return artPiece.slug === slug;
  });

  return (
    <ArtPieceDetails
      data={artDetailData[0]}
      artPiecesInfo={artPiecesInfo}
      onToggleFavourite={onToggleFavourite}
    />
  );
}
