import { ArtPiece } from "@/components/Art Piece/ArtPiece";
import Link from "next/link";
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
          <Link key={index} href={`/art-pieces/${pic.slug}`}>
            <ArtPiece
              src={data[index].imageSource}
              name={pic.name}
              artist={pic.artist}
            />
          </Link>
        );
      })}
    </StyledArtPieces>
  );
}
