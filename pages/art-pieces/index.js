import { ArtPiece } from "@/components/Art Piece/ArtPiece";
import styled from "styled-components";

const StyledArtPieces = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export default function HomePage({ data }) {
  return (
    <StyledArtPieces>
      {data.map((pic, index) => {
        return (
          <ArtPiece
            key={index}
            src={data[index].imageSource}
            name={pic.name}
            artist={pic.artist}
          />
        );
      })}
    </StyledArtPieces>
  );
}
