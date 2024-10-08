import styled from "styled-components";
import { ArtPiece } from "@/components/Art Piece/ArtPiece";

const Styled_spotlight = styled.div``;

export default function _spotlight({ data }) {
  const randomNum = Math.floor(Math.random() * 11);

  const randomPic = data[randomNum];

  console.log(randomPic);

  return (
    <Styled_spotlight>
      {
        <ArtPiece
          artPiece={randomPic}
          src={randomPic.imageSource}
          showButton={false}
        />
      }
    </Styled_spotlight>
  );
}
